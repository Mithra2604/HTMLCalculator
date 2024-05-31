let btnval='';
//let btnval1='';
    function btn1()
    {
     btnval +="1";
     document.getElementById('result').value=btnval;
    }

    //let btnval2='';
    function btn2()
    {
     btnval +="2";
     document.getElementById('result').value=btnval;
    }

    //let btnval3='';
    function btn3()
    {
     btnval +="3";
     document.getElementById('result').value=btnval;
    }

    function btnslash()
    {
     btnval +="/";
     document.getElementById('result').value=btnval;
    }

    function btn4()
    {
     btnval +="4";
     document.getElementById('result').value=btnval;
    }

    function btn5()
    {
     btnval +="5";
     document.getElementById('result').value=btnval;
    }

    function btn6()
    {
     btnval +="6";
     document.getElementById('result').value=btnval;
    }

    function btnmultiply()
    {
     btnval +="*";
     document.getElementById('result').value=btnval;
    }

    function btn7()
    {
     btnval +="7";
     document.getElementById('result').value=btnval;
    }

    function btn8()
    {
     btnval +="8";
     document.getElementById('result').value=btnval;
    }

    function btn9()
    {
     btnval +="9";
     document.getElementById('result').value=btnval;
    }

    function btnminus()
    {
     btnval +="-";
     document.getElementById('result').value=btnval;
    }

    function btn0()
    {
     btnval +="0";
     document.getElementById('result').value=btnval;
    }

    function btndot()
    {
     btnval +=".";
     document.getElementById('result').value=btnval;
    }

    function btnplus()
    {
     btnval +="+";
     document.getElementById('result').value=btnval;
    }

    function btnequal()
    {
     btnval +="=";
     document.getElementById('result').value=btnval;
    }

    function btnreset()
    {
     btnval ='';
     document.getElementById('result').value=btnval;
    }

    function calculate()
    {
        btnval= eval(btnval);
        document.getElementById('result').value=btnval;

    }