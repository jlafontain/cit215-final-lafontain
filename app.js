var app = new Vue({
    el: "#app",
    data: {
        newName:"",
        newType:"",
        newPrice:"",
        newBrand:"",
        newImg:false,
        empty:"",
        addInstrument: false,
        pop: false,
        instrumentDisplay:{},
        cart: [],
        instruments: [
            {
                name: "Fender Stratocaster Limited-Edition Electric Guitar",
                type: "String",
                price: "$849.99",
                brand: "Fender",
                img:"https://media.guitarcenter.com/is/image/MMGS7/L46833000001000-00-720x720.jpg",
            },
            {
                name: "Fender American Ultra Stratocaster",
                type: "String",
                price: "$2,149.99",
                brand: "Fender",
                img:"https://media.guitarcenter.com/is/image/MMGS7/L76318000004000-00-720x720.jpg"
            }, {
                name: "Tour Custom Drum Set",
                type: "Percussion",
                price: "$2,249.20",
                brand: "Yamaha",
                img:"https://www.yamaha.com/yamahavgn/PIM/Images/TC22_set_bts_a_0002_735x735_983eda9066c9a4812bfc2cdc2a7e5932.jpg"
            },
            {
                name: "YAS-875EXII Alto Saxophone",
                type: "WoodWind",
                price: "$6,650.00",
                brand: "Yamaha",
                img:"https://usa.yamaha.com/files/yas875ex_a_0001_735x735_8ff739e29b74577205c5a8c4b37f1388.jpg"
            },
            {
                name: "Maton- Tommy Emmanuel Signature",
                type: "String",
                price: "$2,799.00",
                brand: "Maton",
                img:"https://cdn11.bigcommerce.com/s-e3wpevzfi1/images/stencil/1280x1280/products/3540/64087/24990-3__72869.1649792103.jpg?c=2"
            },
            {
                name: "Maton SRS808C - Natural",
                type: "String",
                price: "$1,999.00",
                brand: "Maton",
                img:"https://cdn11.bigcommerce.com/s-e3wpevzfi1/images/stencil/1280x1280/products/3538/64063/7852-3__05205.1649791920.jpg?c=2"
            },

        ],
    },
    methods:{
        popOut:function (object){
            this.pop=!this.pop;
            this.instrumentDisplay=object;
        },
        form:function(){
            this.addInstrument=!this.addInstrument;
        },
        addCart:function(object,index){
            this.cart.push(object);
            this.instruments.splice(index, 1)
        },
        emptyCart:function(){
            this.instruments=this.instruments.concat(this.cart);
            this.cart=[];
        },
        newInstrument:function(){
            this.instruments.push({
                name:this.newName,
                type:this.newType,
                price: this.newPrice,
                brand: this.newBrand,
            })
            this.newName="";
            this.newType="";
            this.newPrice="";
            this.newBrand="";
            this.addInstrument=false;
        }

    },
    watch:{
        instruments:function(){
            if(this.instruments.length<=0){
                this.empty="Hmm, looks like the store is empty";
            }else{
                this.empty="";
            }
        }
    }
})
