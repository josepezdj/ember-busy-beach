import Route from '@ember/routing/route';

export default class PlayerRoute extends Route {
  model(params) {
    const { player_id } = params;

    return player_id;
  }
}
