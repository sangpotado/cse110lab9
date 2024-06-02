class Lab9Error extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "Kab9Error"; // (2)
    }
    }

    function checkInput(data) {
    if (isNaN(data)) {
        throw new Lab9Error("Invalid data: input is not a number");
    }

    function Step5Error() {
        throw new Lab9Error('Step 5: This error is triggered from "Trigger a Global Error" button');
    }
 
  }
  