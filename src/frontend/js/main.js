var gNodo = function(nodo){
  this.nodoint = nodo;
}

gNodo.prototype.color = function(){
  	var lis = this.nodoint.getElementsByTagName('li');
  	for(var tag in lis)
  	{
  		if (parseInt(lis[tag].innerText)%2 === 0)
  		{
  			lis[tag].setAttribute('class','rojo');
  		}
  	}
}



gNodo.prototype.agregar = function(texto, clase){
	var li=document.createElement("li")
	li.setAttribute("class", clase)
	li.innerText = texto
	this.nodoint.appendChild(li)
}	

gNodo.prototype.eliminar= function(texto){
	var childs = this.nodoint.children

	for (var i = childs.length - 1; i >= 0; i--) {
		if( childs[i].innerText === texto)
		{
			this.nodoint.removeChild(childs[i]);
		}
	};
}	

var nodocolor = new gNodo(document.getElementById('lista'));