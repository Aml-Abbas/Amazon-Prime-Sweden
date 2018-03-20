
$(function(){
    
    var elektronik= [
        { name: 'cigarett', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', price: 1500, id: 1, picture: url('images/cigaret.jpeg'), category: 'elektronik' },
        { name: 'Hörlorar', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', price: 20, id: 2, picture:url('images/horlorar.jpeg'), category: 'elektronik' },
        { name: 'Dator', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', price: 755, id: 3, picture: url('images/dator.jpg'), category: 'elektronik' },
        { name: '3d pen', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', price: 755, id: 4, picture: url('images/penna3d.jpeg'), category: 'elektronik' } 
    ];
    var leksaker=[
        { name: 'Horse', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', price: 800, id: 5, picture:url('images/horse.jpeg'), category: 'leksaker' }
       
    ];
    var telefoner=[
        { name: 'samsung', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', price: 25, id: 6, picture:url('images/samsung.jpeg'), category: 'telefoner' }       
    ];
    var sport=[
        { name: 'Hoppa', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', price: 25, id: 7, picture:url('images/hoppa.jpeg'), category: 'sport' },
        { name: 'swim',  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!',price: 20, id: 8, picture:url('images/simma.jpeg'), category: 'sport' },
        { name: 'spring', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', price: 800, id: 9, picture:url('images/springa.jpeg'), category: 'sport' }
    ];
    var mode = [
         { name: 'väska', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', price: 2000, id: 10, picture:url('images/mode.jpeg'), category: 'mode' }
      ];
    var cart=[];

    var appendlist  = function(array, location){
        var template=array.map(function(item,id){
    return `
    <li>
    <div class="product-content">
    <img src="${item.picture}" alt="product image">
    <h4>${item.name} - <span class="category">${item.category}</span><small>${item.price}</small></h4>
    <p>${item.description}</p>
    </div>
    <button type="button" id="${item.id}">Buy now</button>
    </li>
    `;
        });
        $(location).html(template);
    };
    
    
    appendlist(elektronik,$('.elektronik-list'));
    appendlist(leksaker,$('.leksaker-list'));
    appendlist(telefoner,$('.telefoner-list'));
    appendlist(sport,$('.sport-list'));
    appendlist(mode,$('.mode-list'));
    
    
    });
       
