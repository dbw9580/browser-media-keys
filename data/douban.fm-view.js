/**
 * MediaKeys namespace.
 */
if (typeof MediaKeys == "undefined") var MediaKeys = {};

MediaKeys.playButton = "//label[@title='播放']/svg[contains(@class, 'icon') and not(contains(@class, 'icon-pause'))]";
MediaKeys.pauseButton = "//label[@title='播放']/svg[contains(@class, 'icon') and contains(@class, 'icon-pause')]";
MediaKeys.skipButton = "//label[@title='下一首']/svg[contains(@class, 'icon')]";
