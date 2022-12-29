let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseFloat(document.getElementById('height').value);
    const cg = parseFloat(document.getElementById('cg').value);
    const tw = parseFloat(document.getElementById('tw').value);
    const ground = parseFloat(document.getElementById('ground').value);
    const result = document.getElementById('output');
    

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid Height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(cg === '' || isNaN(cg) || (cg <= 0)){
        document.getElementById('cg_error').innerHTML = 'Please provide a valid CG';
    }else{
        document.getElementById('cg_error').innerHTML = '';
        cg_status=true;}

    if(tw === '' || isNaN(tw) || (tw <= 0)){
        document.getElementById('tw_error').innerHTML = 'Please provide a valid Track Width';
    }else{
        document.getElementById('tw_error').innerHTML = '';
        tw_status=true;    
    }

    if(ground === '' || isNaN(ground) || (ground <= 0)){
        document.getElementById('ground_error').innerHTML = 'Please provide a valid Ground clearance';
    }else{
        document.getElementById('ground_error').innerHTML = '';
        ground_status=true;
    }


    

        const angle = (57.29*Math.atan((2*(cg))/tw)).toFixed(2);
        
        const Lot = (height*Math.cos(angle*0.0174555)).toFixed(2);
        const Lar=((height-ground)*Math.sin(angle*0.0174555)).toFixed(2);
        
        
        result.innerHTML = 'Tipping angle of the vehicle = '+ angle+' degree' +'<br><br> Length of the outrigger = ' + Lot+' mm'+ '<br><br> Length of the angle adjusting rod = '+Lar +' mm';

});