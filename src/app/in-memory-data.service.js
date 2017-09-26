"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var players = [
            { id: 0, name: 'John Doe', position: 'Web-Developer', team: 'Foo' },
            { id: 1, name: 'Steph Curry', position: 'Point-guard', team: 'GoGojImmie' },
            { id: 2, name: 'Kevin Durant', position: 'Small-forward', team: 'BoyToys' },
            { id: 3, name: 'Anthony Davis', position: 'Power-forwared, Center', team: 'SuperTeam' },
            { id: 4, name: 'Kawhi Leonard', position: 'Small-forward, Shooting Guard', team: 'Freeks and Geeks' },
            { id: 5, name: 'Russell Westbrook', position: 'Point guard', team: 'Freeks and Geeks' },
            { id: 6, name: 'James Harden', position: 'Point guard', team: 'DBNegative' },
            { id: 7, name: 'Giannis Antetokounmpo', position: 'Small-forwared, Power-forward, Point-guard', team: 'Freeks and Geeks' },
            { id: 8, name: 'Rudy Gobert', position: 'Center', team: 'GoGojImmie' },
            { id: 9, name: 'Chris Paul', position: 'Point-guard', team: 'TeamAdrian' },
            { id: 1, name: 'Joe Ingles', position: 'Small-Forward', team: 'GoGojImmie' },
        ];
        return { players: players };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map