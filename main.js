var student_array=[];
function submit(){
    for(j =1;j<=4;j++){
        var name_1=document.getElementById("name_"+j).value;
    student_array.push(name_1);
    }
    var display_array=[];
    for(k=0;k<student_array.length;k++){
        display_array.push("<h4>Name-"+student_array[k]+"</h4>")
    }
    console.log(display_array);
    document.getElementById("output").innerHTML=display_array;
    var new_array=display_array.join(" i love this tooo");
    document.getElementById("output_2").innerHTML=new_array;
    document.getElementById("but_1").style.display="none";
    document.getElementById("but_2").style.display="inline-block";

}
function sorty(){
    student_array.sort();
    console.log(student_array);
    document.getElementById("output").innerHTML=student_array;
}