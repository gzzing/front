/**
 * 实现dialog关闭时清空内部数据
 */
$.extend($.fn.dialog.defaults, {
	onBeforeClose : function() {
		$(this).find(".easyui-textbox").each(function() {
			$(this).textbox("setValue",'');
		});
		$(this).find(".easyui-password").each(function() {
			$(this).password("setValue",'');
		});
		$(this).find(".easyui-combobox").each(function() {
			$(this).combobox("setValue",'');
		});
		$(this).find(".easyui-combo").each(function() {
			$(this).combo("setValue",'');
		});
		$(this).find(".easyui-datebox").each(function() {
			$(this).datebox("setValue",'');
		});
	}
});
$.extend($.fn.datagrid.defaults,{
	loadMsg:'正在加载数据...',
	loadData:function(data){
		alert(1);
		$(this).datagrid('loading');
	}
});