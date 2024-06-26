import { React, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./basic.css";
const IdReducer = require("../../src/redux/Feature/MovieIdStore").IdReducer;

let v='',g,i=0,j=0,h=1,m=0;
let k = "",setter;

function Basic() 
{

      const [show, setShow] = useState([""]);
      const [brace, setBrace] = useState([""]);
      const [clearError, setclearError] = useState([""]);
      const [v, setv] = useState([""]);
      const [clear, setclear] = useState([""]);
      const [enter, setenter] = useState([""]);
      const [ac, setac] = useState([""]);
      const [viewer, setviewer] = useState([""]);
      const [closebrace, setclosebrace] = useState([""]);
      const [openbrace, setopenbrace] = useState([""]);
      const dispatch = useDispatch();
      const user = useSelector((state) => state.id).post;

      useEffect(() => {
        // setviewer(show);
        setTimeout(() => {
          dispatch(IdReducer.changer("clrr"));
          console.log(user);
        },100 );
       
      },);
      useEffect(() => {
        document.addEventListener("keydown", detector);
        return () => {
        document.removeEventListener("message", detector);
        };
      }, []);
      function detector(e) {
        console.log(!parseInt(e.key));
        console.log( e.key);
        console.log(e.key == "Backspace");
        if (e.key == "Backspace") {
          setenter(j++);
          // dispatch(IdReducer.changer(1));
          dispatch(IdReducer.changer("clr"));
        }
        if (e.key == "F2") {
          setac(i++);
          
          dispatch(IdReducer.changer("F2"));
        }
        if (e.key == ")") {
          setclosebrace(i++);
          
          dispatch(IdReducer.changer(")"));
        }
        if (e.key == "(") {
          console.log("sss")
          setopenbrace(m++);
          
          dispatch(IdReducer.changer("("));
        }
        if (e.key == "Enter") {
          console.log("enter");
          setclear(i++);
          console.log("entered");
          dispatch(IdReducer.changer("="));
        }
        if ((e.key) == "t")
        {
          dispatch(IdReducer.changer("tan"));
          setv("tan");
        } 
        if ((e.key) == "s")
        {
          dispatch(IdReducer.changer("sin"));
          setv("sin");
        } 
        if ((e.key) == "c")
        {
          dispatch(IdReducer.changer("cos"));
          setv("cos");
        } 
        if (!e.key.match("[a-zA-Z{(!@#$^=\;:?)}]")) {
          
          if (!parseInt(e.key) == "NaN")
          {
            dispatch(IdReducer.changer(e.key));
            setv(parseInt(e.key));
            
          } 
          else
          {
            
            dispatch(IdReducer.changer(e.key));
            setv(e.key);
          }
        }
      }
      useEffect(() => {
        let i;
        console.log(typeof(show.length-1)==="number")
        setclearError("");
        if (0) {
        } else if (show == "") {
          console.log(typeof show);
          setShow(show.concat("1*("));
        } 
        else 
        
        if((show[show.length-1]).match("[0-9]"))
        {
          console.log(show[show.length-1]);
          console.log(typeof parseInt(show[show.length-1]));
          setShow(show.concat("*("));
        
      }
      else if((show[show.length-1])==("("))
        {
          console.log(show[show.length-1]);
          console.log(typeof parseInt(show[show.length-1]));
          setShow(show.concat("*("));
        
      }
      else if(!(show[show.length-1]).match("[0-9]")){
        {
          setShow(show.concat("("));
        console.log(typeof show);
      }
      }
      // let i;
        i++;
        console.log(i);
        if (i != 0) {
          k = k.concat(")");
          console.log(k);
          setBrace(k);
        }
        dispatch(IdReducer.changer("("));
      }, [openbrace]);

      useEffect(() => {
        setclearError("");
        console.log(brace)
        if(!brace=='')
        {
        try {
          i--;
          k = k.slice(0, -1);
          setBrace(k);
          setShow(show.concat(")"));
          console.log(typeof show);
        } catch (e) {
          console.log("Error");
          // h=2;
        }
      }
        dispatch(IdReducer.changer(")"));
      }, [closebrace]);
      useEffect(() => {
        if (show == "Error") setShow("");
        setclearError("");
        setShow("");
        setBrace("");
        k = "";
        // console.log(show);
        console.log(i);
        dispatch(IdReducer.changer("ac"));
      }, [ac]);
      useEffect(() => {
        console.log(v);
        console.log("jhk"+show);
        if(show.length<90)
        setShow(show.concat(v));
        setv('');
        console.log(show);
      }, [v]);

      useEffect(() => {
        console.log(show);
        setclearError("");
        let newString;
        setviewer('');
        if (show[show.length - 1] == ")") {
          setBrace(brace.concat(")"));
          k = k.concat(")");
          setBrace(k);
        }
        if (show[show.length - 1] == "(") {
          // setBrace(brace.concat(")"));
          k = k.slice(0, -1);
          setBrace(k);
        }
        if (
          ((show[show.length - 1] == "(") & (show[show.length - 2] == "^")) ==
          1
        ) {
          console.log(show);
          newString = show;
          //  newString = show.slice(0, -1);
          console.log(newString);
          newString = show.slice(0, -2);
          setShow(newString);
          setBrace(brace.slice(0, -1));
          k = k.slice(0, -1);
        } else if (
          ((show[show.length - 1] == "(") && (show[show.length - 2] == "*"))
        ) {
          console.log(show);
          newString = show;
          newString = show.slice(0, -1);
          console.log(newString);
          newString = show.slice(0, -2);
          setShow(newString);
          setBrace(brace.slice(0, -1));
          setBrace(brace.slice(0, -1));
        } else {
          newString = show.slice(0, -1);
          setShow(newString);
        }
        dispatch(IdReducer.changer("clr"));
      

      }, [enter]);

      useEffect(() => {
        console.log(show);
        if (("" == brace)) {
        setclearError("");
        let val=1;
        
        for(let i=0;i<show.length;i++){
          // console.log()
          if(show[i].match("[.,+/%*\-\]"))
          {
            console.log(show.length)
            console.log("a")
            if(show.length>=2)
            {
              console.log("aa")
            if(show[i+1].match("[.,+/%*\-\]"))
            {
              console.log("aaa")
              setviewer("Repeating Operators without Operands! Fix It!!");
              val=0;
              break;
            }
            }
            else if(show.length==1)
            {
              if(show[i].match("[.,*+\-\/%{}]"))
            {
              setviewer("No Operands! Fix It!!");
              val=0;
              break;
            }
            
            }
          }
           
          }
        // for(let i=0;i<show.length;i++){
        //   // console.log()
        //   if(show[i].match("[.,+/%*\-\]"))
        //   {
        //     console.log(show.length)
        //     console.log("a")
        //     if(show.length>=2)
        //     {
        //       console.log("aa")
        //     if(show[i+1].match("[.,*/%{}]"))
        //     {
        //       console.log("aaa")
        //       setviewer("Repeating Operators without Operands! Fix It!!");
        //       val=0;
        //       break;
        //     }
        //     }
        //   }
        //   // if(show[i]!=="(")
        //   // val=1;
        // }
        for(let i=0;i<show.length;i++){
          // console.log()
          if(show[0].match("[.,+/%*\-\]"))
          {
            setviewer("Operands not available! Handle It!!");
              val=0;
              break;
          }
        }
        // for(let i=0;i<show.length;i++){
        //   console.log(show[i])
        //   if(show[i]=="(")
        //   {
        //     if(show[i-1]=="*")
        //     {
        //       setviewer("Operand missing! Handle It!!");
        //       val=0;
        //       // break;
        //     }
        //   }
        // }
        for(let i=0;i<show.length;i++){
          console.log(show[i])
          if(show[i]==")")
          {
            if(show[i-1]=="(")
            {
              setviewer("Empty ( )! Handle It!!");
              val=0;
              // break;
            }
          }
        }
        if(val==1){
          try {
            if (!("" == show)) {
              g = eval(show).toString();
              // setShow(g);
              setviewer(g);
              console.log(show);
              console.log(g);
              console.log(typeof g);
            }if (!("" == show)) {
              g = eval(show).toString();
              // setShow(g);
              setviewer(g);
              console.log(show);
              console.log(g);
              console.log(typeof g);
            }
            
          } catch (e) {
            console.log("Arithmetic Error");
            k = "";
            i = 0;
            setBrace("");
            setShow("");
            setclearError("Arithmetic Error");
          }
        }
        
        dispatch(IdReducer.changer("="));
      }
      else{
        setviewer("Handle the ( ) Exception");
      }
      }, [clear]);

useEffect(() => {
  console.log(show);
}, [show]);


      function handleCLear() {
        if (show == "Error") setShow("");
        setclearError("");
        setShow("");
        setBrace("");
        setviewer("");
        k = "";
        // console.log(show);
        console.log(i);
        dispatch(IdReducer.changer("ac"));
      }
      function handleEnter(a) {
        setclearError("");
        dispatch(IdReducer.changer(a));
        if (show[show.length - 1] == ")") setShow(show.concat("*" + a));
        else setShow(show.concat(a));
        console.log(show);
      }

      function handleClear() {
        console.log(show);
        setclearError("");
        let newString;
        setviewer('');
        if (show[show.length - 1] == ")") {
          setBrace(brace.concat(")"));
          k = k.concat(")");
          setBrace(k);
        }
        if (show[show.length - 1] == "(") {
          // setBrace(brace.concat(")"));
          k = k.slice(0, -1);
          setBrace(k);
        }
        if (
          ((show[show.length - 1] == "(") & (show[show.length - 2] == "^")) ==
          1
        ) {
          console.log(show);
          newString = show;
          //  newString = show.slice(0, -1);
          console.log(newString);
          newString = show.slice(0, -2);
          setShow(newString);
          setBrace(brace.slice(0, -1));
          k = k.slice(0, -1);
        } else if (
          ((show[show.length - 1] == "(") & (show[show.length - 2] == "*")) ==
          1
        ) {
          console.log(show);
          newString = show;
          newString = show.slice(0, -1);
          console.log(newString);
          newString = show.slice(0, -2);
          setShow(newString);
          setBrace(brace.slice(0, -1));
        } else {
          newString = show.slice(0, -1);
          setShow(newString);
        }
        dispatch(IdReducer.changer("clr"));
      }

      function handleExp() {
        setclearError("");
        setShow(show.concat("^("));
        i++;
        console.log(i);
        if (i != 0) {
          k = brace.concat(")");
          console.log(k);
          setBrace(k);
        }
      }

      function handleBraceOpen() {
        let i;
        console.log(typeof(show.length-1)==="number")
        setclearError("");
        if (0) {
        } else if (show == "") {
          console.log(typeof show);
          setShow(show.concat("1*("));
        } 
        else 
        
        if((show[show.length-1]).match("[0-9]"))
        {
          console.log(show[show.length-1]);
          console.log(typeof parseInt(show[show.length-1]));
          setShow(show.concat("*("));
        
      }else if((show[show.length-1])==("("))
        {
          console.log(show[show.length-1]);
          console.log(typeof parseInt(show[show.length-1]));
          setShow(show.concat("*("));
        
      }
      else if(!(show[show.length-1]).match("[0-9]")){
        {
          setShow(show.concat("("));
        console.log(typeof show);
      }
      }
      
        i++;
        console.log(i);
        if (i != 0) {
          k = k.concat(")");
          console.log(k);
          setBrace(k);
        }
        dispatch(IdReducer.changer("("));
      }

      function handleBraceClose() {
        setclearError("");
        console.log(brace)
        if(!brace=='')
        {
        try {
          i--;
          k = k.slice(0, -1);
          setBrace(k);
          setShow(show.concat(")"));
          console.log(typeof show);
        } catch (e) {
          console.log("Error");
          // h=2;
        }
      }
        dispatch(IdReducer.changer(")"));
      }

      function handleCalculate() {
        console.log(show);
        if (("" == brace)) {
        setclearError("");
        let val=1;
        
        for(let i=0;i<show.length;i++){
          // console.log()
          if(show[i].match("[.,+/%*\-\]"))
          {
            console.log(show.length)
            console.log("a")
            if(show.length>=2)
            {
              console.log("aa")
            if(show[i+1].match("[.,+/%*\-\]"))
            {
              console.log("aaa")
              setviewer("Repeating Operators without Operands! Fix It!!");
              val=0;
              break;
            }
            }
            else if(show.length==1)
            {
              if(show[i].match("[.,*+\-\/%{}]"))
            {
              setviewer("No Operands! Fix It!!");
              val=0;
              break;
            }
            
            }
          }
           
          }
        for(let i=0;i<show.length;i++){
          // console.log()
          if(show[i].match("[.,+/%*\-\]"))
          {
            console.log(show.length)
            console.log("a")
            if(show.length>=2)
            {
              console.log("aa")
            if(show[i+1].match("[.,*/%{}]"))
            {
              console.log("aaa")
              setviewer("Repeating Operators without Operands! Fix It!!");
              val=0;
              break;
            }
            }
          }
          // if(show[i]!=="(")
          // val=1;
        }
        // for(let i=0;i<show.length;i++){
        //   // console.log()
        //   if(show[0].match("[.,+/%*\-\]"))
        //   {
        //     setviewer("Operands not available! Handle It!!");
        //       val=0;
        //       break;
        //   }
        //   // if(show[i]!=="(")
        //   // val=1;
        // }
        for(let i=0;i<show.length;i++){
          console.log(show[i])
          if(show[i]==")")
          {
            if(show[i-1]=="(")
            {
              setviewer("Empty ( )! Handle It!!");
              val=0;
              break;
            }
          }
          // if(show[i]!=="(")
          // val=1;
        }
        if(val==1){
          try {
            if (!("" == show)) {
              g = eval(show).toString();
              // setShow(g);
              setviewer(g);
              console.log(show);
              console.log(g);
              console.log(typeof g);
            }if (!("" == show)) {
              g = eval(show).toString();
              // setShow(g);
              setviewer(g);
              console.log(show);
              console.log(g);
              console.log(typeof g);
            }
            
          } catch (e) {
            console.log("Arithmetic Error");
            k = "";
            i = 0;
            setBrace("");
            setShow("");
            setclearError("Arithmetic Error");
          }
        }
        
        dispatch(IdReducer.changer("="));
      }
      else{
        setviewer("Handle the ( ) Exception");
      }
      }
        
  return (
    <div className="basic">
      
      <div className="output">
        
      <div className="extraa">&nbsp;{show}<span className="extra">{brace}</span></div>
        <div className="ans">{viewer} &nbsp;</div>
        <div className={clearError == "" ? "" : "error"}>{clearError} </div>
      </div>
      <div className="input">
        <div className="button">
          <div className={user == "ac" ? "a1 a active" : "a1 a "} onClick={() => handleCLear()} > AC </div>
          <div className={user == "clr" ? "a2 a active" : "a2 a "} onClick={() => {handleClear()}} > CLR </div>
          <div className={user == "%" ? "a3 a active" : "a3 a "} onClick={() => handleEnter("%")}> % </div>
          <div className={user == "/" ? "a4 a active" : "a4 a "} onClick={() => handleEnter("/")}> / </div>
          
          <div className={user == 7 ? "a5 a active" : "a5 a "} onClick={() => handleEnter(7)}> 7 </div>
          <div className={user == 8 ? "a6 a active" : "a6 a "} onClick={() => handleEnter(8)}> 8 </div>
          <div className={user == 9 ? "a7 a active" : "a7 a "} onClick={() => handleEnter(9)}> 9 </div>
          <div className={user == "*" ? "a8 a active" : "a8 a "} onClick={() => handleEnter("*")}> * </div>
          <div className={user == 4 ? "a9 a active" : "a9 a "} onClick={() => handleEnter(4)}> 4 </div>
          <div className={user == 5 ? "a10 a active" : "a10 a "} onClick={() => handleEnter(5)}> 5 </div>
          <div className={user == 6 ? "a11 a active" : "a11 a "} onClick={() => handleEnter(6)}> 6 </div>
          <div className={user == "-" ? "a12 a active" : "a12 a "} onClick={() => handleEnter("-")}> - </div>
          <div className={user == 1 ? "a13 a active" : "a13 a "} onClick={() => handleEnter(1)}> 1 </div>
          <div className={user == 2 ? "a14 a active" : "a14 a "} onClick={() => handleEnter(2)}> 2 </div>
          <div className={user == 3 ? "a15 a active" : "a15 a "} onClick={() => handleEnter(3)}> 3 </div>
          <div className={user == "+" ? "a16 a active" : "a16 a "} onClick={() => handleEnter("+")}> + </div>
          <div className={user == 0 ? "a17 a active" : "a17 a "} onClick={() => handleEnter(0)}> 0 </div>
          <div className={user == "00" ? "a18 a active" : "a18 a "} onClick={() => handleEnter("00")}> 00 </div>
          <div className={user == "exp" ? "a20 a active" : "a20 a "} onClick={() => handleExp()}> EXP </div>
          <div className={user == "." ? "a21 a active" : "a21 a "} onClick={() => handleEnter(".")}> . </div>
          <div className={user == "(" ? "a23 a active" : "a23 a "} onClick={() => handleBraceOpen()}> ( </div>
          <div className={user == ")" ? "a22 a active" : "a22 a "} onClick={() => handleBraceClose()}> ) </div>
          <div className={user == "=" ? "a19 a active" : "a19 a "} onClick={() => handleCalculate()}> = </div>
          {/* <div className={user == "tan" ? "a24 a active" : "a24 a "} onClick={() => handleEnter("tan")}> tan </div>
          <div className={user == "cos" ? "a24 a active" : "a24 a "} onClick={() => handleEnter("cos")}> cos </div>
          <div className={user == "sin" ? "a24 a active" : "a24 a "} onClick={() => handleEnter("sin")}> sin </div> */}
        </div>
      </div>
    </div>
  );
  }

export default Basic