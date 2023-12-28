function show(){
    let table=document.getElementById('table');
    let rows=document.getElementById('row').value;
    let cells=document.getElementById('cell').value;



    for(i=1;i<=rows;i++){
        let tr = document.createElement('tr');
        for(j=1;j<=cells;j++){
            let td = document.createElement('td');
           let tt= tr.appendChild(td);
           tt.innerHTML+=j
        }   
        table.appendChild(tr)
    
    } 
}