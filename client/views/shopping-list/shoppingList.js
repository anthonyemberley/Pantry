/**
 * Created by timhiggins on 11/16/15.
 */
 Template.shoppingList.onRendered(function () {
    //Set the session variable for shopping list to show a remove option in the recipe widget
    Session.set('shoppingList', true);
});

Template.shoppingList.helpers({
    //This function returns the shopping list of the current user
    shoppingList : function () {
        var shoppingList = ShoppingList.findOne({username: Meteor.user().username});
        return shoppingList;
    },

    //this function returns the recipes that the user has added to their shopping list
    recipes : function () {
        var shoppingList = ShoppingList.findOne({username: Meteor.user().username});
        var recipes = Recipe.find({id : {$in: shoppingList.recipes}});
        return recipes;
    }
});

var dic = {};

Template.shoppingList.onRendered(function(){

    //all possible recipes to be added to the shopping list
    var availableIngredients = [{'expires': '14', 'unit': 'Tablespoons', 'title': 'Butter'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Blue Cheese'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Brie Cheese'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Cheddar Cheese'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Colby Cheese'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Cream Cheese'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Gouda Cheese'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Mozzarella Cheese'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Parmesan Cheese'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Provolone Cheese'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Swiss Cheese'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Whipping Cream'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Sour Cream'}, {'expires': '7', 'unit': 'Ounces ', 'title': 'Cottage Cheese'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Eggnog'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Milk'}, {'expires': '10', 'unit': 'Ounces ', 'title': 'American Cheese'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Evaporated Milk'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Chocolate Milk'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Yogurt'}, {'expires': '14', 'unit': 'Number', 'title': 'Eggs'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Egg Whites'}, {'expires': '14', 'unit': 'Number', 'title': 'Egg Yolks'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Lowfat Milk'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Half and Half'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Whipped Cream'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Mexican Cheese'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Condensed Milk'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Ice Cream'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Greek Yogurt'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Allspice'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Anise Seed'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Basil'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Bay Leaf'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Caraway Seed'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Cardamom'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Celery Seed'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Chervil'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Chili Powder'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Ground Cinnamon'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Ground Cloves'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Coriander Leaf'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Coriander Seed'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Cumin Seed'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Curry Powder'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Dill Seed'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Dill Weed'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Fennel Seed'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Fenugreek Seed'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Garlic Powder'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Ground Ginger'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Ground Mace'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Marjoram'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Ground Mustard Seed'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Ground Nutmeg'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Onion Powder'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Oregano'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Paprika'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Parsley'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Black Pepper'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Cayenne'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'White Pepper'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Poppy Seed'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Poultry Seasoning '}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Pumpkin Pie Spice'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Rosemary'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Saffron'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Ground Sage'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Ground Savory'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Tarragon'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Thyme'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Tamarind'}, {'expires': '10', 'unit': 'Teaspoons', 'title': 'Fresh Basil'}, {'expires': '10', 'unit': 'Teaspoons', 'title': 'Fresh Dill Weed'}, {'expires': '50', 'unit': 'Teaspoons', 'title': 'Yellow Mustard'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Table Salt'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Cider Vinegar'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Fresh Thyme'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Vanilla Extract'}, {'expires': '10', 'unit': 'Teaspoons', 'title': 'Distilled Vinegar'}, {'expires': '14', 'unit': 'Cups', 'title': 'Capers'}, {'expires': '10', 'unit': 'Teaspoons', 'title': 'Horseradish'}, {'expires': '10', 'unit': 'Tablespoons', 'title': 'Fresh Rosemary'}, {'expires': '10', 'unit': 'Tablespoons', 'title': 'Fresh Peppermint'}, {'expires': '10', 'unit': 'Tablespoons', 'title': 'Fresh Spearmint'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Dried Spearmint'}, {'expires': '100', 'unit': 'Ounces', 'title': 'Red Wine Vinegar'}, {'expires': '100', 'unit': 'Ounces', 'title': 'Balsamic Vinegar'}, {'expires': '100', 'unit': 'Teaspoons', 'title': 'Taco Seasoning'}, {'expires': '40', 'unit': 'Ounces', 'title': 'Russian Salad Dressing'}, {'expires': '40', 'unit': 'Ounces', 'title': 'Sesame Salad Dressing'}, {'expires': '40', 'unit': 'Ounces', 'title': '1000 Island Salad Dressing'}, {'expires': '40', 'unit': 'Ounces', 'title': 'Mayo'}, {'expires': '40', 'unit': 'Ounces', 'title': 'French Salad Dressing'}, {'expires': '40', 'unit': 'Ounces', 'title': 'Italian Salad Dressing'}, {'expires': '40', 'unit': 'Ounces', 'title': 'Ceasar Salad Dressing'}, {'expires': '40', 'unit': 'Ounces', 'title': 'Oil and Vinegar Salad Dressing'}, {'expires': '40', 'unit': 'Ounces', 'title': 'Shortening'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Cooking Oil'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Coconut Oil'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Peanut Oil'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Olive Oil'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Vegetable Oil'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Palm Oil'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Sesame Oil'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Ground Chicken'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Chicken Breast'}, {'expires': '10', 'unit': 'Number', 'title': 'Whole Chicken'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Chicken Wings'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Chicken Thighs'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Boneless Chicken'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Duck Breast'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Goose'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Pheasant'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Quail'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Ground Turkey'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Turkey Breast'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Whole Turkey'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Turkey Leg'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Chicken Noodle Soup'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Beef Broth'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Tomato Soup'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Soup'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Black Bean Soup'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Vegetable Broth'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Gravy'}, {'expires': '21', 'unit': 'Ounces', 'title': 'Barbecue Sauce'}, {'expires': '21', 'unit': 'Ounces', 'title': 'Plum Sauce'}, {'expires': '50', 'unit': 'Ounces', 'title': 'Pizza Sauce'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Tabasco Sauce'}, {'expires': '50', 'unit': 'Ounces', 'title': 'Clam Chowder'}, {'expires': '50', 'unit': 'Ounces', 'title': 'Salsa'}, {'expires': '50', 'unit': 'Ounces', 'title': 'Verde Salsa'}, {'expires': '50', 'unit': 'Ounces', 'title': 'Green Chili Sauce'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Pesto'}, {'expires': '50', 'unit': 'Ounces', 'title': 'Sriracha'}, {'expires': '100', 'unit': 'Ounces', 'title': 'Spaghetti Sauce'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Worcestershire Sauce'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Bologna'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Chopped Ham'}, {'expires': '21', 'unit': 'Number', 'title': 'Italian Sausage'}, {'expires': '21', 'unit': 'Ounces', 'title': 'Pastrami'}, {'expires': '21', 'unit': 'Number', 'title': 'Polish Sausage'}, {'expires': '21', 'unit': 'Ounces', 'title': 'Salami'}, {'expires': '21', 'unit': 'Ounces', 'title': 'Link Sausage'}, {'expires': '21', 'unit': 'Ounces', 'title': 'Summer Sausage'}, {'expires': '21', 'unit': 'Number', 'title': 'Bratwurst'}, {'expires': '21', 'unit': 'Ounces', 'title': 'Liverwurst'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Roast Beef'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Bacon'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Kielbasa'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Meatballs'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Turkey Bacon'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Smoked Ham'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Pork Sausage'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Raisin Bran'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Lucky Charms'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Oatmeal'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Cream of Wheat'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Cinnamon Toast Crunch'}, {'expires': '30', 'unit': 'Number', 'title': 'Apple'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Apple Juice'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Apple Sauce'}, {'expires': '30', 'unit': 'Number', 'title': 'Apricots'}, {'expires': '10', 'unit': 'Number', 'title': 'Avacados'}, {'expires': '10', 'unit': 'Number', 'title': 'Bananas'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Blackberries'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Cherries'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Blueberries'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Red Cherries'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Cranberries'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Cranberry Sauce'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Dried Currants'}, {'expires': '10', 'unit': 'Number', 'title': 'Dates'}, {'expires': '10', 'unit': 'Number', 'title': 'Figs'}, {'expires': '10', 'unit': 'Number', 'title': 'Grapefruit'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Grapes'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Grape Juice'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Guava Juice'}, {'expires': '10', 'unit': 'Number', 'title': 'Guava'}, {'expires': '14', 'unit': 'Number', 'title': 'Kiwi'}, {'expires': '14', 'unit': 'Number', 'title': 'Kumquats'}, {'expires': '15', 'unit': 'Number', 'title': 'Lemons'}, {'expires': '21', 'unit': 'Ounces', 'title': 'Lemon Juice'}, {'expires': '5', 'unit': 'Teaspoons', 'title': 'Lemon Rine'}, {'expires': '14', 'unit': 'Number', 'title': 'Limes'}, {'expires': '14', 'unit': 'Tablespoons', 'title': 'Lime Juice'}, {'expires': '14', 'unit': 'Tablespoons', 'title': 'Dried Blueberries'}, {'expires': '14', 'unit': 'Number', 'title': 'Mangos'}, {'expires': '100', 'unit': 'Ounces', 'title': 'Dried Mangos'}, {'expires': '14', 'unit': 'Cups', 'title': 'Cantaloupe Melon'}, {'expires': '14', 'unit': 'Cups', 'title': 'Honeydew Melon'}, {'expires': '14', 'unit': 'Number', 'title': 'Nectarines'}, {'expires': '14', 'unit': 'Number', 'title': 'Oheloberries'}, {'expires': '21', 'unit': 'Ounces', 'title': 'Olives'}, {'expires': '14', 'unit': 'Number', 'title': 'Oranges'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Orange Juice'}, {'expires': '14', 'unit': 'Cups', 'title': 'Orange Peel'}, {'expires': '5', 'unit': 'Teaspoons', 'title': 'Orange Rine'}, {'expires': '14', 'unit': 'Number', 'title': 'Tangerine'}, {'expires': '14', 'unit': 'Number', 'title': 'Papayas'}, {'expires': '14', 'unit': 'Number', 'title': 'Passion Fruit'}, {'expires': '14', 'unit': 'Number', 'title': 'Peaches'}, {'expires': '14', 'unit': 'Number ', 'title': 'Pears'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Pineapples'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Pineapple Juice'}, {'expires': '14', 'unit': 'Number', 'title': 'Pitanga'}, {'expires': '14', 'unit': 'Number', 'title': 'Raw Plantains '}, {'expires': '14', 'unit': 'Number', 'title': 'Plantains'}, {'expires': '14', 'unit': 'Number', 'title': 'Plums'}, {'expires': '14', 'unit': 'Number', 'title': 'Pomegranates '}, {'expires': '14', 'unit': 'Number', 'title': 'Prunes'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Prune Juice'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Raspberries'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Strawberries'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Pork Shoulder'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Pork Chops'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Pork'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Ribs'}, {'expires': '10', 'unit': 'Number', 'title': 'Artichokes'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Canned Artichokes'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Asparagus'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Bamboo Shoots'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Kidney Beans'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Lima Beans'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Black Beans'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Pinto Beans'}, {'expires': '14', 'unit': 'Number', 'title': 'Beets'}, {'expires': '14', 'unit': 'Heads', 'title': 'Broccoli'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Brussel Sprouts'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Kimchi'}, {'expires': '14', 'unit': 'Heads', 'title': 'Cabbage'}, {'expires': '100', 'unit': 'Ounces', 'title': 'Baby Carrots'}, {'expires': '100', 'unit': 'Ounces', 'title': 'Baby Baby Carrots'}, {'expires': '1000', 'unit': 'Dopes', 'title': 'Baby Carrots'}, {'expires': '14', 'unit': 'Number', 'title': 'Whole Carrots'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Cauliflower'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Celery Seed'}, {'expires': '10', 'unit': 'Cups', 'title': 'Chives'}, {'expires': '10', 'unit': 'Cups', 'title': 'Collared Greens'}, {'expires': '10', 'unit': 'Tablespoons', 'title': 'Coriander'}, {'expires': '10', 'unit': 'Number', 'title': 'Corn Ears'}, {'expires': '10', 'unit': 'Number', 'title': 'Cucumber'}, {'expires': '10', 'unit': 'Number', 'title': 'Eggplant'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Edamame'}, {'expires': '50', 'unit': 'Cloves', 'title': 'Garlic'}, {'expires': '20', 'unit': 'Tablespoons', 'title': 'Ginger Root'}, {'expires': '20', 'unit': 'Number', 'title': 'Jerusalem Artichokes'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Kale'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Shitake Mushrooms'}, {'expires': '14', 'unit': 'Number', 'title': 'Portabella Mushrooms'}, {'expires': '14', 'unit': 'Ounces', 'title': 'White Mushrooms'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Leeks'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Lentils'}, {'expires': '10', 'unit': 'Heads', 'title': 'Lettuce'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Okra'}, {'expires': '14', 'unit': 'Cups', 'title': 'Yello Onions'}, {'expires': '14', 'unit': 'Cups', 'title': 'Red Onions'}, {'expires': '10', 'unit': 'Tablespoons', 'title': 'Fresh Parsley'}, {'expires': '10', 'unit': 'Tablespoons', 'title': 'Parsnips'}, {'expires': '10', 'unit': 'Number', 'title': 'Green Peppers'}, {'expires': '10', 'unit': 'Number', 'title': 'Red Peppers'}, {'expires': '10', 'unit': 'Number', 'title': 'Yellow Peppers'}, {'expires': '10', 'unit': 'Number', 'title': 'Hot Peppers'}, {'expires': '10', 'unit': 'Number', 'title': 'Potatoes'}, {'expires': '10', 'unit': 'Number', 'title': 'Sweet Potatoes'}, {'expires': '10', 'unit': 'Number', 'title': 'Yams'}, {'expires': '10', 'unit': 'Number', 'title': 'Purple Potatoes'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Pumpkin'}, {'expires': '10', 'unit': 'Number', 'title': 'Radishes'}, {'expires': '10', 'unit': 'Number', 'title': 'Rutabagas'}, {'expires': '10', 'unit': 'Cups', 'title': 'Seaweed'}, {'expires': '10', 'unit': 'Cups', 'title': 'Soybeans'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Spinach'}, {'expires': '10', 'unit': 'Number', 'title': 'Butternut Squash'}, {'expires': '10', 'unit': 'Number', 'title': 'Squash'}, {'expires': '10', 'unit': 'Number', 'title': 'Zucchini'}, {'expires': '10', 'unit': 'Number', 'title': 'Yellow Squash'}, {'expires': '10', 'unit': 'Number', 'title': 'Tomatoes'}, {'expires': '10', 'unit': 'Number', 'title': 'Green Tomatoes'}, {'expires': '10', 'unit': 'Number', 'title': 'Baby Tomatoes'}, {'expires': '10', 'unit': 'Number', 'title': 'Turnips'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Water Chestnuts'}, {'expires': '10', 'unit': 'Cups', 'title': 'Shallots'}, {'expires': '10', 'unit': 'Number', 'title': 'Winter Squash'}, {'expires': '21', 'unit': 'Ounces', 'title': 'Carrot Juice'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Spinach'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Taro'}, {'expires': '50', 'unit': 'Ounces', 'title': 'Catsup'}, {'expires': '50', 'unit': 'Ounces', 'title': 'Ketchup'}, {'expires': '14', 'unit': 'Number', 'title': 'Pickles'}, {'expires': '59', 'unit': 'Ounces', 'title': 'Relish'}, {'expires': '30', 'unit': 'Number', 'title': 'Zucchini Squash'}, {'expires': '21', 'unit': 'Number', 'title': 'Tomatillos'}, {'expires': '21', 'unit': 'Ounces', 'title': 'Sun-dried Tomatoes'}, {'expires': '21', 'unit': 'Ounces', 'title': 'Arugula'}, {'expires': '21', 'unit': 'Ounces', 'title': 'CARROTS,BABY,RAW'}, {'expires': '21', 'unit': 'Ounces', 'title': 'Artichoke Hearts'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Cabbage'}, {'expires': '10', 'unit': 'Cups', 'title': 'Lemon Grass'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Fava Beans'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Banana Peppers'}, {'expires': '21', 'unit': 'Number', 'title': 'Serrano Peppers'}, {'expires': '21', 'unit': 'Number', 'title': 'Ancho Peppers'}, {'expires': '21', 'unit': 'Number', 'title': 'Jalapeno Peppers'}, {'expires': '21', 'unit': 'Number', 'title': 'Chili Peppers'}, {'expires': '21', 'unit': 'Number', 'title': 'Hungarian Peppers'}, {'expires': '21', 'unit': 'Number', 'title': 'Pasilla Peppers'}, {'expires': '50', 'unit': 'Tablespoons', 'title': 'Wasabi'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Chia Seeds'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Cotton Seeds'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Hemp Seeds'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Lotus Seeds'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Pumpkin Seeds'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Safflower Seeds'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Sesame Seeds'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Sunflower Seeds'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Acorns'}, {'expires': '100', 'unit': 'Cups', 'title': 'Acorn Flour'}, {'expires': '100', 'unit': 'Cups', 'title': 'Almonds'}, {'expires': '100', 'unit': 'Cups', 'title': 'Almond Paste'}, {'expires': '100', 'unit': 'Cups', 'title': 'Beech Nuts'}, {'expires': '100', 'unit': 'Cups', 'title': 'Brazil Nuts'}, {'expires': '100', 'unit': 'Cups', 'title': 'Butternuts'}, {'expires': '100', 'unit': 'Cups', 'title': 'Cashew Nuts'}, {'expires': '100', 'unit': 'Cups', 'title': 'Chesnuts'}, {'expires': '100', 'unit': 'Cups', 'title': 'Coconut '}, {'expires': '100', 'unit': 'Ounces', 'title': 'Coconut Milk'}, {'expires': '100', 'unit': 'Ounces', 'title': 'Coconut'}, {'expires': '100', 'unit': 'Cups', 'title': 'Hazelnuts'}, {'expires': '100', 'unit': 'Cups', 'title': 'Ginkgo Nuts'}, {'expires': '100', 'unit': 'Cups', 'title': 'Macadamia Nuts'}, {'expires': '100', 'unit': 'Cups', 'title': 'Mixed Nuts'}, {'expires': '100', 'unit': 'Cups', 'title': 'Pecans'}, {'expires': '100', 'unit': 'Cups', 'title': 'Pine Nuts'}, {'expires': '100', 'unit': 'Cups', 'title': 'Pistachio Nuts'}, {'expires': '100', 'unit': 'Cups', 'title': 'Walnuts'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Breadfruit Seeds'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Sesame Butter'}, {'expires': '100', 'unit': 'Cups', 'title': 'Coconut Meat'}, {'expires': '100', 'unit': 'Cups', 'title': 'Almond Butter'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Sesame Butter'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Sesame Seeds'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Flax Seeds'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Cashew Butter'}, {'expires': '100', 'unit': 'Ounces', 'title': 'Pumpkin Meat'}, {'expires': '100', 'unit': 'Cups', 'title': 'Almond Nuts'}, {'expires': '100', 'unit': 'Ounces', 'title': 'Almond Butter'}, {'expires': '100', 'unit': 'Cups', 'title': 'Mixed Nuts'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Beef Rib'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Steak'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Ground Beef'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Beef Loin'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Hamburger Meat'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Beer'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Red Wine'}, {'expires': '20', 'unit': 'Ounces', 'title': 'White Wine'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Almond Milk'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Energy Drink'}, {'expires': '100', 'unit': 'Ounces', 'title': 'Vodka'}, {'expires': '100', 'unit': 'Ounces', 'title': 'Whiskey'}, {'expires': '100', 'unit': 'Ounces', 'title': 'Tequila'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Lemonade'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Anchovy'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Fresh Bass'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Striped Bass'}, {'expires': '7', 'unit': 'Ounces', 'title': ' Blue Fish'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Burbot'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Butterfish'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Carp'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Catfish'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Caviar'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Cisco'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Cod'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Croaker'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Cusk'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Mahimahi'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Eel'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Fish Sticks'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Founder'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Geftilfish'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Grouper'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Haddock'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Halibut '}, {'expires': '7', 'unit': 'Ounces', 'title': 'Herring '}, {'expires': '7', 'unit': 'Ounces', 'title': 'Mackerel'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Monkfish'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Mullet'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Ocean Perch'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Perch'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Pike'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Pollock'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Pompano'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Rockfish'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Sablefish'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Wild Caught Salmon'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Salmon'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Sardines'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Seabass'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Seatrout'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Shark'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Sheepshead'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Smelt'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Snapper'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Spot'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Sturgeoun'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Sucker'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Swordfish'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Tilefish'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Trout'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Tuna'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Tuna Salad'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Whitefish'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Whiting'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Yellowtail'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Alaskan King Crab'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Blue Crab'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Crayfish'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Lobster'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Shrimp'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Albalone'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Clam'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Cuttlefish'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Mussels'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Octopus'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Oyster'}, {'expires': '7', 'unit': 'OUnces', 'title': 'Scallops'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Squid'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Whelk'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Tilapia'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Jumbo Shrimp'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Baked Beans'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Kidney Beans'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Navy Beans'}, {'expires': '20', 'unit': 'Ounces', 'title': 'White Beans'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Chickpeas'}, {'expires': '50', 'unit': 'Cups', 'title': 'Peanuts'}, {'expires': '50', 'unit': 'Ounces', 'title': 'Crunchy Peanut Butter'}, {'expires': '50', 'unit': 'Ounces', 'title': 'Peanut Butter'}, {'expires': '20', 'unit': 'Tablespoons', 'title': 'Miso'}, {'expires': '20', 'unit': 'Tablespoons', 'title': 'Natto'}, {'expires': '20', 'unit': 'Tablespoons', 'title': 'Tempeh'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Tofu'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Okara'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Hummus'}, {'expires': '50', 'unit': 'Ounces', 'title': 'Soymilk'}, {'expires': '50', 'unit': 'Ounces', 'title': 'Chocolate Soymilk'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Veal'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Lamb Leg'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Lamb Chops'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Lamb'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Veal Steak'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Ground Veal'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Veal Leg'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Bison Meat'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Bison'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Deer'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Elk'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Goat'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Horse'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Moose'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Muskrat'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Opossum'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Rabbit'}, {'expires': '7', 'unit': 'Ounces', 'title': 'Raccoon '}, {'expires': '7', 'unit': 'Ounces', 'title': 'Squirrel'}, {'expires': '14', 'unit': 'Number', 'title': 'Plain Bagel'}, {'expires': '14', 'unit': 'Number', 'title': 'Everything Bagel'}, {'expires': '14', 'unit': 'Number', 'title': 'Blueberry Bagel'}, {'expires': '14', 'unit': 'Number', 'title': 'Biscuits'}, {'expires': '14', 'unit': 'Number', 'title': 'Cornbread'}, {'expires': '14', 'unit': 'Number', 'title': 'Whole Wheat Bread'}, {'expires': '14', 'unit': 'Number', 'title': 'French Bread'}, {'expires': '14', 'unit': 'Number', 'title': 'Irish Soda Bread'}, {'expires': '14', 'unit': 'Number', 'title': 'Wheat Bread'}, {'expires': '14', 'unit': 'Number', 'title': 'Multi Grain Bread'}, {'expires': '14', 'unit': 'Number', 'title': 'Oat Bran bread'}, {'expires': '14', 'unit': 'Number', 'title': 'Oatmeal Bread'}, {'expires': '14', 'unit': 'Number', 'title': 'Pita Bread'}, {'expires': '14', 'unit': 'Number', 'title': 'Rice Bran Bread'}, {'expires': '14', 'unit': 'Number', 'title': 'Rye Bread'}, {'expires': '14', 'unit': 'Number', 'title': 'Angelfood Cake'}, {'expires': '14', 'unit': 'Number', 'title': 'Chocolate Cake'}, {'expires': '14', 'unit': 'Number', 'title': 'Vanilla Cake'}, {'expires': '14', 'unit': 'Number', 'title': 'Carrot Cake'}, {'expires': '14', 'unit': 'Number', 'title': 'Cherry Fudge Cake'}, {'expires': '14', 'unit': 'Number', 'title': 'Sugar Cookies'}, {'expires': '14', 'unit': 'Number', 'title': 'Snickerdoodle Cookies'}, {'expires': '14', 'unit': 'Number', 'title': 'Chocolate Chip Cookies'}, {'expires': '14', 'unit': 'Number', 'title': 'Oatmeal Raisin Cookies'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Wheat Thins'}, {'expires': '14', 'unit': 'Ounces', 'title': 'Crackers'}, {'expires': '3', 'unit': 'Ounces', 'title': 'Wafers'}, {'expires': '20', 'unit': 'Number', 'title': 'Croissants'}, {'expires': '20', 'unit': 'Cups', 'title': 'Croutons'}, {'expires': '20', 'unit': 'Number', 'title': 'Doughnuts'}, {'expires': '20', 'unit': 'Number', 'title': 'English Muffins'}, {'expires': '20', 'unit': 'Number', 'title': 'Muffins'}, {'expires': '20', 'unit': 'Number', 'title': 'Blueberry Muffins'}, {'expires': '20', 'unit': 'Number', 'title': 'Poppyseed Muffins'}, {'expires': '20', 'unit': 'Number', 'title': 'Oat Bran Muffins'}, {'expires': '20', 'unit': 'Number', 'title': 'Chocolate Chip Muffins'}, {'expires': '20', 'unit': 'Number', 'title': 'Dinner Rolls'}, {'expires': '20', 'unit': 'Number', 'title': 'French Rolls'}, {'expires': '20', 'unit': 'Number', 'title': 'Hamburger Buns'}, {'expires': '20', 'unit': 'Number', 'title': 'Hotdog Buns'}, {'expires': '20', 'unit': 'Number', 'title': 'Hamburger Rolls'}, {'expires': '20', 'unit': 'Number', 'title': 'Hard Rolls'}, {'expires': '20', 'unit': 'Number', 'title': 'Tortillas'}, {'expires': '20', 'unit': 'Number', 'title': 'Waffles'}, {'expires': '20', 'unit': 'Number', 'title': 'Tostada'}, {'expires': '20', 'unit': 'Number', 'title': 'Gronola Bars'}, {'expires': '30', 'unit': 'Ounces', 'title': 'Syrup'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Oriental Mix'}, {'expires': '20', 'unit': 'Cups', 'title': 'Chex Mix'}, {'expires': '20', 'unit': 'Cups', 'title': 'Popcorn'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Potato Chips'}, {'expires': '20', 'unit': 'Number', 'title': 'Pretzel'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Trail Mix'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Tortilla Chips'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Tootsie Rolls'}, {'expires': '30', 'unit': 'Cups', 'title': 'Maple Syrup'}, {'expires': '100', 'unit': 'Cups', 'title': "M&M's"}, {'expires': '10', 'unit': 'Cups', 'title': 'Vanilla Pudding'}, {'expires': '10', 'unit': 'Cups', 'title': 'Pudding'}, {'expires': '20', 'unit': 'Cups', 'title': 'Frosting'}, {'expires': '20', 'unit': 'Cups', 'title': 'Caramel Custard'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Chocolate Pudding'}, {'expires': '20', 'unit': 'Ounces', 'title': "Hershey's Kisses"}, {'expires': '20', 'unit': 'Ounces', 'title': "Reese's Pieces"}, {'expires': '50', 'unit': 'Number', 'title': 'Snickers'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Vanilla Frosting '}, {'expires': '20', 'unit': 'Ounces', 'title': 'Chocolate Frosting'}, {'expires': '50', 'unit': 'Ounces', 'title': 'Honey'}, {'expires': '50', 'unit': 'Cups', 'title': 'Jam'}, {'expires': '50', 'unit': 'Cups', 'title': 'Jelly'}, {'expires': '50', 'unit': 'Cups', 'title': 'Orange Marmalade'}, {'expires': '50', 'unit': 'Cups', 'title': 'Molasses'}, {'expires': '10', 'unit': 'Cups', 'title': 'Pectin'}, {'expires': '200', 'unit': 'Cups', 'title': 'Brown Sugar'}, {'expires': '200', 'unit': 'Cups', 'title': 'Granulated Sugar'}, {'expires': '200', 'unit': 'Cups', 'title': 'Powdered Sugar'}, {'expires': '100', 'unit': 'Tablespoons', 'title': 'Sweetners'}, {'expires': '50', 'unit': 'Cups', 'title': 'Maple Sugar'}, {'expires': '50', 'unit': 'Cups', 'title': 'Malt Syrup'}, {'expires': '10', 'unit': 'Number', 'title': 'Pork Skins'}, {'expires': '10', 'unit': 'Ounces', 'title': 'Amaranth'}, {'expires': '100', 'unit': 'Cups', 'title': 'Barley'}, {'expires': '100', 'unit': 'Cups', 'title': 'Buckwheat'}, {'expires': '100', 'unit': 'Cups', 'title': 'Bulgar'}, {'expires': '100', 'unit': 'Cups', 'title': 'Corn Bran'}, {'expires': '100', 'unit': 'Cups', 'title': 'Corn Flour'}, {'expires': '100', 'unit': 'Cups', 'title': 'Cornmeal'}, {'expires': '100', 'unit': 'Cups', 'title': 'Cornstarch'}, {'expires': '100', 'unit': 'Cups', 'title': 'Couscous'}, {'expires': '100', 'unit': 'Cups', 'title': 'White Rice'}, {'expires': '100', 'unit': 'Cups', 'title': 'Brown Rice'}, {'expires': '100', 'unit': 'Cups', 'title': 'Hominy'}, {'expires': '100', 'unit': 'Cups', 'title': 'Millet'}, {'expires': '100', 'unit': 'Cups', 'title': 'Oat Bran'}, {'expires': '100', 'unit': 'Cups', 'title': 'Quinoa'}, {'expires': '100', 'unit': 'Cups', 'title': 'Mixed Rice'}, {'expires': '100', 'unit': 'Cups', 'title': 'Oats'}, {'expires': '100', 'unit': 'Cups', 'title': 'Black Rice'}, {'expires': '100', 'unit': 'Cups', 'title': 'Rice Flour'}, {'expires': '20', 'unit': 'Cups', 'title': 'Tapioca'}, {'expires': '100', 'unit': 'Cups', 'title': 'Wheat Flour'}, {'expires': '100', 'unit': 'Cups', 'title': 'Wild Rice'}, {'expires': '100', 'unit': 'Cups', 'title': 'Whole Wheat Flour'}, {'expires': '100', 'unit': 'Cups', 'title': 'Pasta'}, {'expires': '100', 'unit': 'Cups', 'title': 'Pasta Shells'}, {'expires': '100', 'unit': 'Cups', 'title': 'Macaroni'}, {'expires': '100', 'unit': 'Cups', 'title': 'Angel Hair Pasta'}, {'expires': '100', 'unit': 'Cups', 'title': 'Egg Noodles'}, {'expires': '100', 'unit': 'Cups', 'title': 'Chinese Noodles'}, {'expires': '100', 'unit': 'Cups', 'title': 'Japanese Noodles'}, {'expires': '100', 'unit': 'Cups', 'title': 'Bow-tie Pasta'}, {'expires': '100', 'unit': 'Cups', 'title': 'Dry Pasta'}, {'expires': '100', 'unit': 'Cups', 'title': 'Whole-Wheat Pasta'}, {'expires': '100', 'unit': 'Cups', 'title': 'Spaghetti'}, {'expires': '100', 'unit': 'Cups', 'title': 'Barley Malt'}, {'expires': '100', 'unit': 'Cups', 'title': 'Teff'}, {'expires': '100', 'unit': 'Cups', 'title': 'Orchiette'}, {'expires': '100', 'unit': 'Cups', 'title': 'Cornmeal'}, {'expires': '100', 'unit': 'Cups', 'title': 'Whole-Wheat Spaghetti'}, {'expires': '100', 'unit': 'Cups', 'title': 'Gluten Free Pasta'}, {'expires': '20', 'unit': 'Cups', 'title': 'Cheese Ravioli'}, {'expires': '20', 'unit': 'Cups', 'title': 'Meat Ravioli'}, {'expires': '20', 'unit': 'Cups', 'title': 'Tortellini'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Beef Stew'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Chicken Pot Pie'}, {'expires': '20', 'unit': 'Ounces', 'title': 'Corned Beef Hash'}, {'expires': '20', 'unit': 'Number', 'title': 'Egg Rolls'}, {'expires': '7', 'unit': 'Number', 'title': 'Lasagna'}, {'expires': '100', 'unit': 'Ounces', 'title': 'V8 Juice'}, {'expires': '100', 'unit': 'Ounces', 'title': 'Cane Syrup'}, {'expires': '10', 'unit': 'Number', 'title': 'Snail'}, {'expires': '10', 'unit': 'Number', 'title': 'Turtle'}, {'expires': '200', 'unit': 'Cups', 'title': 'Flour'}, {'expires': '200', 'unit': 'Cups', 'title': 'Wheat Flour'}];

    availableIngredients.forEach(function(elt, idx, array){
        dic[elt['title'].toLowerCase()] = {'unit': elt['unit'], 'expires': elt['expires']}
    });

    //set the search parameters
    $('.ui.search')
        .search({
            source: availableIngredients,
            searchFields: ['title'],
            searchFullText: true,
            onSelect: function (result, response) {
                $('.unitInput').val(result.unit);
                if ($('.amountInput').val() == "") {
                    $('.amountInput').val(1);
                }
            }
        });

});

var updateFields = function (template) {
  var ingredientSoFar = template.find("input.prompt").value.toLowerCase();
  if (ingredientSoFar in dic) {
      if (template.find(".amountInput").value == "") {
          template.find(".amountInput").value = 1;
      }
      template.find(".unitInput").value = dic[ingredientSoFar]['unit'];
  }
  else {
      template.find(".amountInput").value = "";
      template.find(".unitInput").value = "";
  }
}

Template.shoppingList.events({
    'click .search.button' : function () {
        Router.go('/recipes');
    },

    'focusout .ingredientInput' : function (evt, template) {
        updateFields(template);
    },
    'keyup .ingredientInput' : function (evt, template) {
        updateFields(template);
    },

    //add the ingredient to the shopping list
    'click #addButton': function(evt, template){

        var ingredient = template.find("input.prompt").value;
        var amount = template.find(".amountInput").value;
        var unit = template.find(".unitInput").value;

        if (ingredient == "" || !(ingredient.toLowerCase() in dic)) {
            $('.warning').removeClass("hidden");
            return;
        }

        var currentIngredients = ShoppingList.findOne({username: Meteor.user().username}).ingredients;
        var alreadyInList = false;

        for(var i = 0; i < currentIngredients.length; i++) {
            if (currentIngredients[i].ingredientName == ingredient) {
                alreadyInList = true;
                break;
            }
        }


        if (ingredient.length > 0 && amount > 0 && unit.length > 0) {
            var thisId = ShoppingList.findOne({username: Meteor.user().username})._id;

            if (alreadyInList) {
                //add to the existing ingredient the amount the user inputs
                //update the object on mongodb
                currentIngredients.forEach(function(elt, idx, array){
                    if (elt.ingredientName === ingredient) {
                        elt.amount = parseInt(elt.amount) + parseInt(amount);
                    }
                });

                ShoppingList.update(
                  { _id: thisId },
                  { $set: { ingredients: currentIngredients }}
                );



            } else {
                //push the new ingredient into the user's pantry
                var ing = {'ingredientName': ingredient, 'amount': amount, 'unit': unit};

                ShoppingList.update(
                  {_id: thisId},
                  { $push: { ingredients: ing }}
                );
            }
        }

        $("input.prompt").val("");
        $(".amountInput").val("");
        $(".unitInput").val("");
    },

    //this funcion will move all the ingredients from the shopping list to the
    //user's pantry.  This button would be pressed after a user went to the
    //grocrey store and bought all of the ingredients on their list then
    //wants to input them all into their pantry.

    'click #moveButton': function(evt, template){

        var shoppingListId = ShoppingList.findOne({username: Meteor.user().username})._id;
        var ingredientsToMove = ShoppingList.findOne({username: Meteor.user().username}).ingredients;

        var pantryId = Pantry.findOne({username: Meteor.user().username})._id;
        var ingredientsInPantry = [];
        Pantry.findOne({username: Meteor.user().username}).ingredients.forEach(function(elt, idx, array){
            ingredientsInPantry.push(elt.ingredientName);
        });

        console.log(ingredientsToMove);
        //move each ingredient over and update the pantry
        ingredientsToMove.forEach(function(elt, idx, array){

            if (ingredientsInPantry.indexOf(elt.ingredientName) > -1) {

                var theseIngs = Pantry.findOne({username: Meteor.user().username}).ingredients;

                theseIngs.forEach(function(elt2, idx2, array2){
                    if(elt2.ingredientName == elt.ingredientName){
                        elt2.amount = parseInt(elt2.amount) + parseInt(elt.amount);
                    }
                });

                Pantry.update(
                  {_id: pantryId},
                  { $set:{ ingredients: theseIngs }}
                );

            } else {

                Pantry.update(
                  {_id: pantryId},
                  { $push: { ingredients: elt }}
                );

            }

        });

        ShoppingList.update(
            {_id: shoppingListId},
            { $set:{ ingredients: [], recipes: [] }}
        );

    },

    //increment the amount of an ingredient the user has after the
    //plus button is pressed
    'click .plus.icon': function(evt, template){

        var thisId = ShoppingList.findOne({username: Meteor.user().username})._id;

        var ingredientList = ShoppingList.findOne({username: Meteor.user().username}).ingredients;
        var thisIngredient = this.ingredientName;
        ingredientList.forEach(function(elt, idx, array){
            if (elt.ingredientName === thisIngredient) {
                elt.amount = .5 + parseFloat(elt.amount);
            }
        });

        ShoppingList.update(
            { _id: thisId },
            { $set: { ingredients: ingredientList }}
        );
    },

    //decrement the amount of an ingredient the user has after the
    //minus button is pressed
    'click .minus.icon': function(evt, template){
        var thisId = ShoppingList.findOne({username: Meteor.user().username})._id;

        var ingredientList = ShoppingList.findOne({username: Meteor.user().username}).ingredients;
        var thisIngredient = this.ingredientName;
        ingredientList.forEach(function(elt, idx, array){
            if (elt.ingredientName === thisIngredient) {
                elt.amount = -.5 + parseFloat(elt.amount);
            }
        });

        for (i = 0; i < ingredientList.length; i++) {
            if (ingredientList[i].amount <= 0) {
                ingredientList.splice(i, 1);
                i--;
            }
        }


        ShoppingList.update(
            { _id: thisId },
            { $set: { ingredients: ingredientList }}
        );
    }
});
