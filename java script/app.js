var list=document.querySelector('ul')

var arr=['list', 'cook oatmeal', 'eat']
console.log(list)
arr.push('completed')
for (var i=0;i<arr.length;i++)
{
    var element=document.createElement('li')
    var textnode=document.createTextNode(arr[i])
    console.log(element)
    element.appendChild(textnode)
    list.appendChild(element)
}