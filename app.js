function insert(num){
    document.form.textview.value = document.form.textview.value + num;
}
function back(){
    var delOne = document.form.textview.value;
    document.form.textview.value = delOne.substring(0, delOne.length-1);
}
function clean(){
    document.form.textview.value = '';
}
function equal(){
    var sum = document.form.textview.value; 
    document.form.textview.value = eval(sum);
}