import Home from '@/views/View.Home.vue';
import HomeData from '@/assets/data.home.json';

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    expect(Home.data()).toMatchObject(HomeData);
  });
});
