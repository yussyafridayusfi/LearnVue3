// Safely load the Vue CLI Babel preset if it's available. This avoids
// hard failures in editors or tools when node_modules aren't installed.
let presets = [];
try {
  require.resolve('@vue/cli-plugin-babel/preset');
  presets.push('@vue/cli-plugin-babel/preset');
} catch (e) {
}

module.exports = {
  presets
};
