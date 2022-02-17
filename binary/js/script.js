$('.filter__item').click(function(event){
	//Беремо значення data з html
	var i=$(this).data('filter');
	//порівнюємо значення змінної із отриманним значенням при натисканні
	if (i==1){
		$('.portfolio__column').show(); //якщо одиниця показати всі
	}else{
		$('.portfolio__column').hide(); //якщо не одиниця то всі приховати
		$('.portfolio__column.f_'+i).show(); //але показати ті картинки, котрі відповідають значенню змінній
	}
	$('.filter__item').removeClass('active'); //витягти клас active із активної змінної data
	$(this).addClass('active'); //додати клас active власнику нового значення data

	return false;
});

