class Author {
    constructor(name, surname, pictureURL, username, email, phone, address, company, listOfPosts){
        this.name = name;
        this.surname = surname;
        this.pictureURL = pictureURL;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.company = company;
        this.listOfPosts = listOfPosts;
    }
    getFullName = () => {
        return `${this.name} ${this.surname}`
    }
}

export { Author }