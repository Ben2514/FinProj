var order=["", "", "", "", ""];
var n=[0, 0, 0, 0, 0];
var index=0;
var item="";
var amount=0;
var amount_temp=0;
var place="";
var datetime=new Date();

function A() {
  item=item+"burgerA";
  amount_temp=1;
}
function B() {
  item=item+"burgerB";
  amount_temp=10;
}
function C() {
  item=item+"burgerC";
  amount_temp=100;
}
function D() {
  item=item+"burgerD";
  amount_temp=1000;
}

function a() {
  item=item+" a";
}
function b() {
  item=item+" b";
}
function c() {
  item=item+" c";
}
function a1() {
  item=item+" a1";
}
function b1() {
  item=item+" b1";
}
function c1() {
  item=item+" c1";
}

function plus() {
  n[index]=n[index]+1;
}
function minus() {
  n[index]=n[index]-1;
}

function burger() {
  order[index]=item;
  n[index]=n[index]+1;
  amount=amount+amount_temp*n[index];
  console.log(item, n[index], amount);
  index=index+1;
  item="";
}

function confirm() {
  place="NCKU";
  datetime=datetime.getFullYear() + '-' +
  ('00' + (datetime.getMonth()+1)).slice(-2) + '-' +
  ('00' + datetime.getDate()).slice(-2) + ' ' + 
  ('00' + datetime.getHours()).slice(-2) + ':' + 
  ('00' + datetime.getMinutes()).slice(-2) + ':' + 
  ('00' + datetime.getSeconds()).slice(-2);
  console.log(datetime);
  console.log(order);
  console.log(n);
  console.log(amount);
  $.post('/order', {"id":now.id, "item":order, "number":n, "time":datetime, "place":place, "amount":amount}, (data)=>{
    document.getElementById("order").innerHTML=data;
  });
}
