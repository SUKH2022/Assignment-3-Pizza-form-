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

    // Calculate total cost
    const totalCost = pizzaOrder.calculateTotalCost();

    // Display total cost
    document.getElementById("totalCost").innerHTML = `Total Cost: $${totalCost.toFixed(2)}`;

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
        return `Pizza Order:\n${this.pizzaSize} ${this.pizzaType} pizza with ${this.crustType} crust and toppings: ${this.toppings.join(", ")}.\nDelivery: ${this.delivery}, Address: ${this.deliveryAddress},\n Payment Method: ${this.paymentMethod}`;
    }
    calculateTotalCost() {
        let baseCost = 0;

        // Set base cost based on pizza size
        switch (this.pizzaSize) {
            case "small":
                baseCost = 8.99;
                break;
            case "medium":
                baseCost = 11.99;
                break;
            case "large":
                baseCost = 14.99;
                break;
            default:
                break;
        }

        // Add additional cost for each topping
        const toppingCost = 1.5 * this.toppings.length;

        // Add delivery cost if delivery is selected
        const deliveryCost = this.delivery === "yes" ? 2.99 : 0;

        // Calculate total cost
        const totalCost = baseCost + toppingCost + deliveryCost;

        return totalCost;
    }
}

