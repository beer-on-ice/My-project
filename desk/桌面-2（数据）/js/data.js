var data = {
	menu:{
		'deskMenu':[
			{
				name:'新建',
				child:[
					{
						callBackName:'createFloder',
						name:'新建文件夹'
					},{
						name:'新建记事本'
					},{
						name:'创建快捷方式'
					}
				]
			},
			{
				name:'刷新(E)'
			},
			{
				name:'排序方式(O)',
				child:[
					{
						callBackName:'timeSort',
						name:'按照时间排序'
					},{
						callBackName:'nameSort',
						name:'按照名称排序'
					},{
						callBackName:'typeSort',
						name:'按照类型排序'
					}
				]
			},
			{
				callBackName:'uploadFile',
				name:'上传文件'
			},
			{
				callBackName:'changeBg',
				name:'个性化(R)'
			}
		],
		'fileMenu':[
			{
				name:'重命名'
			},
			{
				name:'删除'
			}
		]
	}
};
