export default{
    name:'product',
    title : 'Product',
    type : 'document',

    fields :[
        {
            name:'img',
            title:'Name',
            of : [{type : 'image'}],
            options:{
                hotspot:'true',
            }
        },

        {
            name:'name',
            title :'Name',
            type:'string',
        },
        {
            name:'slug',
            title:'Slug',
            type:'Slug',
            options:{
                source:'name',
                MaxLength : 90,
            }
        },
        {
            name:'price',
            title:'Price',
            type:'number',
        },
        {
            name:'details',
            title:'Details',
            type:'string',
        }
    ]
}