function submitForm() {
    // Capture values from each form input
    var fullName = document.getElementsByName("fname")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var contactNo = document.getElementsByName("contact_no")[0].value;
    var pizzaType = document.getElementById("piz_type").value;
    var pizzaSize = document.getElementById("piz_size").value;
    var crustType = document.getElementById("cru_type").value;
    var delivery = document.querySelector('input[name="delivery"]:checked').value;
    var deliveryAddress = document.getElementsByName("d_address")[0].value;
    var paymentMethod = document.getElementById("pay").value;
    var toppings = [];

    // Loop through checkboxes to get selected toppings
    var checkboxes = document.getElementsByName("add_top[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            toppings.push(checkboxes[i].value);
        }
    }

    // Create a Pizza object
    var pizzaOrder = new Pizza(fullName, email, contactNo, pizzaType, pizzaSize, crustType, toppings, delivery, deliveryAddress, paymentMethod);

    // Output description of the customer's pizza to the HTML page
    document.getElementById("studentInfo").innerHTML = "Student ID: 200520246<br>Name: Sukhpreet Saini<br><br>" + pizzaOrder.getDescription();

    // Display submission message
    document.getElementById("submissionMessage").innerHTML = "Order submitted successfully!";
}

// Pizza class
class Pizza {
    constructor(fullName, email, contactNo, pizzaType, pizzaSize, crustType, toppings, delivery, deliveryAddress, paymentMethod) {
        this.fullName = fullName;
        this.email = email;
        this.contactNo = contactNo;
        this.pizzaType = pizzaType;
        this.pizzaSize = pizzaSize;
        this.crustType = crustType;
        this.toppings = toppings;
        this.delivery = delivery;
        this.deliveryAddress = deliveryAddress;
        this.paymentMethod = paymentMethod;
    }

    getDescription() {
        return `Pizza Order:\n${this.pizzaSize} ${this.pizzaType} pizza with ${this.crustType} crust and toppings: ${this.toppings.join(", ")}.\nDelivery: ${this.delivery}, Address: ${this.deliveryAddress}\nPayment Method: ${this.paymentMethod}`;
    }
}
