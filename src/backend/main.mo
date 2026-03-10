import Map "mo:core/Map";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Order "mo:core/Order";

actor {
  type Book = {
    id : Nat;
    title : Text;
    author : Text;
    genre : Text;
    available : Bool;
  };

  type LibraryInfo = {
    name : Text;
    address : Text;
    about : Text;
    hours : Text;
  };

  module Book {
    public func compareByTitle(book1 : Book, book2 : Book) : Order.Order {
      Text.compare(book1.title, book2.title);
    };

    public func compareByAuthor(book1 : Book, book2 : Book) : Order.Order {
      Text.compare(book1.author, book2.author);
    };
  };

  let books = Map.empty<Nat, Book>();
  let services = Map.empty<Nat, Text>();

  var libraryInfo : LibraryInfo = {
    name = "Kataria Library";
    address = "123 Library Lane";
    about = "A community library serving the local area.";
    hours = "Mon-Fri: 9am-5pm";
  };

  var bookIdCounter = 0;

  public query ({ caller }) func getLibraryInfo() : async LibraryInfo {
    libraryInfo;
  };

  public shared ({ caller }) func updateLibraryInfo(name : Text, address : Text, about : Text, hours : Text) : async () {
    libraryInfo := {
      name;
      address;
      about;
      hours;
    };
  };

  public shared ({ caller }) func addBook(title : Text, author : Text, genre : Text) : async Nat {
    let bookId = bookIdCounter;
    let book : Book = {
      id = bookId;
      title;
      author;
      genre;
      available = true;
    };
    books.add(bookId, book);
    bookIdCounter += 1;
    bookId;
  };

  public shared ({ caller }) func updateBook(bookId : Nat, title : Text, author : Text, genre : Text, available : Bool) : async () {
    switch (books.get(bookId)) {
      case (null) { Runtime.trap("Book does not exist") };
      case (?_) {
        let updatedBook : Book = {
          id = bookId;
          title;
          author;
          genre;
          available;
        };
        books.add(bookId, updatedBook);
      };
    };
  };

  public query ({ caller }) func getAllBooks() : async [Book] {
    books.values().toArray();
  };

  public query ({ caller }) func getBooksByGenre(genre : Text) : async [Book] {
    books.values().toArray().filter(
      func(book) {
        book.genre == genre;
      }
    );
  };

  public shared ({ caller }) func addService(service : Text) : async () {
    let serviceId = services.size();
    services.add(serviceId, service);
  };

  public shared ({ caller }) func updateService(serviceId : Nat, service : Text) : async () {
    switch (services.get(serviceId)) {
      case (null) { Runtime.trap("Service does not exist") };
      case (?_) {
        services.add(serviceId, service);
      };
    };
  };

  public query ({ caller }) func getAllServices() : async [Text] {
    services.values().toArray();
  };
};
