var Person = React.createClass({
    // I metoden "getInitialState" beskriver vi komponentens
    // tillstånd genom att returnera ett objekt innehållande
    // den data vi behöver / vill ha
    getInitialState: function() {
        return {
            firstname: "Sherlock",
            lastname: "Holmes"
        };
    },
    render: function() {
        // För att använda oss av den dynamiska datan (tillståndet)
        // hämtar vi det genom `this.state`
        return (
            <p>{this.state.firstname} {this.state.lastname}</p>
        )
    }
});
