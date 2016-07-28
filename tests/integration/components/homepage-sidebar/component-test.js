import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('homepage-sidebar', 'Integration | Component | homepage sidebar', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{homepage-sidebar}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#homepage-sidebar}}
      template block text
    {{/homepage-sidebar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
