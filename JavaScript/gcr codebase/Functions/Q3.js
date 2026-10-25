const user = {
    name: "Deepak",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

user.showName = function() {
    console.log(this.name);
};

user.showName();
