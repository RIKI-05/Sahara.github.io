function check() {
    // document.write('hello')
    var a = 0;
    var d = 0;
    var e = 0;
    var c = 0;
    var b = 0;
    var one = document.quiz.A.value;
    var two = document.quiz.B.value;
    var three = document.quiz.C.value;
    var four = document.quiz.D.value;
    var five = document.quiz.E.value;

    if (one == "Never") {
        a += 0;
    } else if (one == "Sometimes") {
        a += 2;
    } else if (one == "often") {
        a += 5;
    }


    if (two == "Never2") {
        b += 0;
    } else if (two == "Sometimes2") {
        b += 2;
    } else if (two == "often2") {
        b += 5;
    }


    if (three == "Never3") {
        c += 0;
    } else if (three == "Sometimes3") {
        c += 2;
    } else if (three == "often3") {
        c += 5;
    }


    if (four == "Never4") {
        d += 0;
    } else if (four == "Sometimes4") {
        d += 2;
    } else if (four == "often4") {
        d += 5;
    }


    if (five == "Never5") {
        e += 0;
    } else if (five == "Sometimes5") {
        e += 2;
    } else if (five == "often5") {
        e += 5;
    }

    // document.write((a + b + c + d + e))
    var s = (a + b + c + d + e);
    if (s < 5) {

        document.write("you are perfectly fine");
    } else if (s < 15) {
        document.write("Did you have a bad day");
    } else if (s <= 25) {
        document.write("You have Anxiety");
    }
}