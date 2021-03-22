		var r=window.location.pathname+window.location.search+window.location.hash;
		var p = window.location.pathname.split('/')[1];
		var h = window.location.hostname.split('.').reverse().splice(0,2).reverse().join('.');
		var w = 'workers.dev';
		var x=document.referrer;
		function fix()
		{
		if(h=== w&&p.indexOf('gp')>-1)
		(r=r.replace(/^.+?[\/]/,''))&&window.location.replace('https://play.google.com/store/apps/details'+r);
		
		if(h=== w&&p.indexOf('web')>-1)
		(r=r.replace(/^.+?[\/]/,''))&&window.location.replace('https://'+r);
		
		if(h=== w&&p.indexOf('tem')>-1)
		(r=r.replace(/^.+?[\/]/,'').replace('/',''))&&window.location.replace('https://'+r+'.blogspot.com');
		
		if(h=== w&&p.indexOf('apps')>-1)
		window.location.replace('https://app.maladev.com/app/'+r);
		};
		if(x.indexOf("abzinid")>-1||x.indexOf("maladev")>-1)
		{
		fix()
		};
		document.addEventListener('DOMContentLoaded',() =>{
		document.getElementById('main').addEventListener('click',() =>
		{
		 fix();
		});
		});
