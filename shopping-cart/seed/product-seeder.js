var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var products =[
    new Product({
    imagePath:'http://driver.pk/wp-content/uploads/2016/02/2016-Honda-Insight-release-date-2.jpg',
    title:'Honda Insight',
    description: 'jqsdljhwgdwlgwdfwjglhggggl' +
                 'gglgjglglkjglhjjghgjhjh',
    price:10
}),
    new Product({
        imagePath:'https://www.nissan-cdn.net/content/dam/Nissan/th/vehicles/x-trail/product_code/product_version/overview/X-trail-Silver.png.ximg.m_12_h.smart.png',
        title:'Nissan X-trail',
        description: 'jqsdljhwgdwlgwdfwjglhggggl' +
        'gglgjglglkjglhjjghgjhjh',
        price:70
    }),
    new Product({
        imagePath:'http://indianautosblog.com/wp-content/uploads/2015/09/Mitsubishi-Outlander-PHEV-front-three-quarter-at-the-IAA-2015.jpg',
        title:'Mitshubishi Outlander',
        description: 'jqsdljhwgdwlgwdfwjglhggggl' +
        'gglgjglglkjglhjjghgjhjh',
        price:80
    }),
    new Product({
        imagePath:'https://www.cstatic-images.com/car-pictures/xl/USC70TOS141G021001.png',
        title:'Toyota Highlander',
        description: 'jqsdljhwgdwlgwdfwjglhggggl' +
        'gglgjglglkjglhjjghgjhjh',
        price:90
    }),
    new Product({
        imagePath:'http://2017hondanews.com/wp-content/uploads/2015/11/2017-Honda-CR-Z-rear-view.jpg',
        title:'Honda CRZ',
        description: 'jqsdljhwgdwlgwdfwjglhggggl' +
        'gglgjglglkjglhjjghgjhjh',
        price:60
    }),
    new Product({
        imagePath:'https://blogs-images.forbes.com/tonybradley/files/2014/04/670px-toyota_prius_iii_20090710_front.jpg?width=960',
        title:'Toyota Prius',
        description: 'jqsdljhwgdwlgwdfwjglhggggl' +
        'gglgjglglkjglhjjghgjhjh',
        price:40
    }),
    ];

var done =0;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done==products.length){
            exit();
        }
    });
}
function exit() {
    mongoose.disconnect();
}