
const elementConfig = {
	placement: "entryRequirementsPage",
	defaultNationality:'USA',
	//defaultPassport: 'USA',
	features: {
		showSegments: true,
		enableSegmentEditor: true,
		showTitle: false
	},
	segments: [
		{
			segmentType: 'OUTBOUND',
			origin: {
				countryCode: 'USA',
			},
			destination: {
				countryCode: 'GRC',
			},
			departureDate: '2021-10-08'
		}
	] /* ,
	travellers: [{
		nationality: 'USA',
		vaccinations: {
			type: 'COVID_19',
			status: 'FULLY_VACCINATED',
		}
	}] */
}
$sherpa.V2.createElement('trip', elementConfig).mount('#sherpa-widget')

const elementConfig2 = {
	placement: "entryRequirementsPage",
	defaultNationality:'USA',
	//defaultPassport: 'USA',
	features: {
		showSegments: false,
		enableSegmentEditor: false,
		showTitle: false
	},
	segments: [
		{
			segmentType: 'OUTBOUND',
			origin: {
				countryCode: 'GRC',
			},
			destination: {
				countryCode: 'TUR',
			},
			departureDate: '2021-10-09'
		}
	] /* ,
	travellers: [{
		nationality: 'USA',
		vaccinations: {
			type: 'COVID_19',
			status: 'FULLY_VACCINATED',
		}
	}] */
}
$sherpa.V2.createElement('trip', elementConfig2).mount('#sherpa-widget-2')

const elementConfig3 = {
	placement: "entryRequirementsPage",
	defaultNationality:'USA',
	//defaultPassport: 'USA',
	features: {
		showSegments: false,
		enableSegmentEditor: false,
		showTitle: false
	},
	segments: [
		{
			segmentType: 'OUTBOUND',
			origin: {
				countryCode: 'TUR',
			},
			destination: {
				countryCode: 'EGY',
			},
			departureDate: '2021-10-10'
		}
	] /* ,
	travellers: [{
		nationality: 'USA',
		vaccinations: {
			type: 'COVID_19',
			status: 'FULLY_VACCINATED',
		}
	}] */
}
$sherpa.V2.createElement('trip', elementConfig3).mount('#sherpa-widget-3')
    
    
    
    
    var eventTypes = [
		'sdkLoaded'
	]
	// Register the onSherpaEvent under the globnal window scope before the script is loaded
	function onSherpaEvent(event) {
		console.warn('Event from Sherpa SDK:')
		console.log({
			event
		})
	}