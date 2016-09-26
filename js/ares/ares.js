function Ares(partnerId, employeeSn){
    this.id = partnerId;
    this.sn = employeeSn;
    this.data = null
}

Ares.prototype.init = function(){
    if( ! this.data ) {
        this.getData()        
    } else {
        this.render() 
    }
}


Ares.prototype.getData = function(){
    var url = URL_PREFIX + '/index.php';
    var urlObj = {
        controller: 'employee', 
        action: 'card'
    }
    var mv = this
    $.getJSON( url, urlObj, function(data){
        if(data.error == 0){
            mv.transformData( data.data  )
            mv.render() 
        }
    })
}

Ares.prototype.transformData = function(data){
    data.stars = [] 
    var i 
    for(i=0; i<data.star_num; i++) {
        data.stars.push(i) 
    }
    this.data = data
}

Ares.prototype.render = function(){
    if (!this.data ) {
        return  
    }
    var html = template('ares', this.data  );
    document.getElementById('center').innerHTML = html;
}


function aresRouteEntry (){
    try{
        if( ! gData.ares ) {
            gData.ares =  new Ares(partner_id, employee_sn)
        }
        gData.ares.init()

    } catch(e) {
        alert(e.message + '  ' + e.stack) 
    }
}

module.exports = aresRouteEntry
