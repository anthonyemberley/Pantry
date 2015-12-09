Template.index.helpers({
  'feature' : function () {
    return [
      { 'text' : 'Find recipes', 'color' : 'red', 'icon' : 'spoon', 'path': '#recipes' },
      { 'text' : 'Cook great food', 'color' : 'blue', 'icon' : 'thumbs up', 'path': '#ingredients' },
      { 'text' : 'Create shopping lists', 'color' : 'red', 'icon' : 'add to cart', 'path': '#shoppinglist' },
      { 'text' : 'Save money', 'color' : 'blue', 'icon' : 'dollar', 'path': '#money' }
    ];
  },
  'recipe' : function () {
    return [
      { 'name' : 'Italian Lasagna' },
      { 'name' : 'Old Bay Chicken Wings' },
      { 'name' : 'Steakhouse Sirloin' },
      { 'name' : 'Eggplant Ravioli' },
      { 'name' : 'Tuna Melt' },
      { 'name' : 'Barbeque Ribs' },
      { 'name' : 'Lemon Chicken Piccata' },
		{ 'name' : 'Shrimp Gumbo' }
    ];
  },
  'ingredient' : function () {
    return [
      { 'name' : 'Jerusalem Artichokes' },
      { 'name' : 'Anise Seed' },
      { 'name' : 'Quail' },
      { 'name' : 'Thousand Island Dressing' },
      { 'name' : 'Dill Weed' },
      { 'name' : 'Ground Mace' },
      { 'name' : 'Eggplant Ravioli' },
		{ 'name' : 'Opossum' }
    ];
  },
  'shoppinglist' : function () {
    return [
      { 'name' : 'Easily keep track of what you need to purchase at the store' },
		{ 'name' : 'Add entire recipes or single ingredients to your cart' }
    ];
  },
  'money' : function () {
    return [
      { 'name' : 'You will never buy duplicates when you know what is in your pantry.' },
      { 'name' : 'Smart recipes suggests you cook food that is going bad soon.' },
      { 'name' : 'Never forget to write down an ingredient from a recipe when you can add all ingredients.' },
		{ 'name' : 'Reminders when food is expiring.' }
    ];
  },
});

Template.index.rendered = function () {
  // @see: http://stackoverflow.com/questions/5284814/jquery-scroll-to-div
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }

    return true;
  });
};
