const { sequelize } = require('./db');
const { Restaurant, Menu } = require('./index');
const { seedRestaurant, seedMenu } = require('./seedData');

describe('Restaurant and Menu Models', () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test('can create a Restaurant', async () => {
    // TODO - write test
    const newRest = await Restaurant.create(seedRestaurant[0]);
    expect(newRest.name).toEqual(seedRestaurant[0].name);
  });

  test('can create a Menu', async () => {
    // TODO - write test
    const newMenu = await Menu.create(seedMenu[0]);
    expect(newMenu.title).toEqual(seedMenu[0].title);
  });

  test('can find Restaurants', async () => {
    // TODO - write test
    const allRestaurants = await Restaurant.findAll();
    expect(allRestaurants.length).toEqual(1);
    expect(allRestaurants[0].name).toEqual(seedRestaurant[0].name)
  });

  test('can find Menus', async () => {
    // TODO - write test
    const allMenus = await Menu.findAll();
    expect(allMenus.length).toEqual(1);
    expect(allMenus[0].title).toEqual(seedMenu[0].title)
  });

  test('can delete Restaurants', async () => {
    // TODO - write test
    const foundRest = await Restaurant.findAll();
    const deletedRestaurant = await foundRest[0].destroy();
    expect(Restaurant.length).toEqual(0);
    expect(deletedRestaurant.name).toEqual(seedRestaurant[0].name)
  });
});
