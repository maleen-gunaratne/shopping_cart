module.exports =function Cart(oldCart){

    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0 ;
    this.totalPrice=oldCart.totalPrice || 0  ;



    this.add =function(item,id){
       var storedItem =this.items[id];


        if(!storedItem){
            storedItem = this.items[id]={item:item , qty:0,price:0};
        }


        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
      //  console.log('storedItem.price'+storedItem.price);
      //  console.log('storedItem.item.price'+storedItem.item.price);
       // console.log('storedItem.item.price 2'+storedItem.item.price+ storedItem.item.price);
       // console.log('storedItem.item.price* 2'+storedItem.item.price*2);
      //  console.log('this.totalPrice'+this.totalPrice);
//
        this.totalQty++;

        this.totalPrice+=storedItem.item.price;

    };
    console.log('cart model middle');
    this.generateArray = function(){
        var arr =[];
        for(var id in this.item){
            arr.push(this.items[id]);
        }
        console.log('cart model bottom');
        return arr;
    };
};