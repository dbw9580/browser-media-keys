/**
 * MediaKeys namespace.
 */
if (typeof MediaKeys == "undefined") var MediaKeys = {};

MediaKeys.playButton = "//label[@title='播放']/*[1][contains(@class, 'icon') and not(contains(@class, 'icon-pause'))]";
MediaKeys.pauseButton = "//label[@title='暂停']/*[1][contains(@class, 'icon') and contains(@class, 'icon-pause')]";
MediaKeys.skipButton = "//label[@title='下一首']/*[1][contains(@class, 'icon')]";
