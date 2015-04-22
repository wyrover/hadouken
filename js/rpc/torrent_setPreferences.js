var session = require("bittorrent").session;
var core    = require("core");

exports.rpc = {
    name: "torrent.setPreferences",
    method: function(infoHash, prefs) {
        var torrent = session.findTorrent(infoHash);

        if(!torrent) {
            return null;
        }

        prefs = prefs || {};

        if(prefs.hasOwnProperty("maxConnections")) { torrent.maxConnections = parseInt(prefs.maxConnections, 10); }
        if(prefs.hasOwnProperty("maxUploads")) { torrent.maxUploads = parseInt(prefs.maxUploads, 10); }
        if(prefs.hasOwnProperty("uploadLimit")) { torrent.uploadLimit = parseInt(prefs.uploadLimit, 10); }
        if(prefs.hasOwnProperty("uploadMode")) { torrent.uploadMode = !!prefs.uploadMode; }

        return true;
    }
};
