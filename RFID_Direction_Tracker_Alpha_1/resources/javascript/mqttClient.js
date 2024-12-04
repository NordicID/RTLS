<script>

// MQTT Connection Credentials
const protocol = "mqtt"
const host = "192.168.0.110"
const port = "1883"
const clientId = "ThisIsMyClientID"
const connectUrl = 'https://192.168.0.110:1885/wsp'
const topic = 'RfidEdge/N214700052/Rfid/#'
var client = ''

function getMqttMessage() {
    
    // Connect to MQTT Server
    client = mqtt.connect(connectUrl, {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: '',
    password: '',
    reconnectPeriod: 1000,
    })

    client.on('connect', () => {
    console.log('Connected')
    })

    // Topic Subscription
    client.on('connect', () => {
    console.log('Connected')
    client.subscribe([topic], () => {
        console.log(`Subscribe to topic '${topic}'`)
        client.on('message', (topic, payload) => {
        console.log('Received Message:', topic, payload.toString())
        })
    })
    })

    // Connection Error
    client.on('error', (error) => {
    console.error('connection failed', error)
    })

    // Reconnection Error
    client.on('reconnect', (error) => {
    console.error('reconnect failed', error)
    })

    // Subscription Error
    client.on('connect', () => {
    client.subscribe('topic', (error) => {
        if (error) {
        console.error('subscription failed', error)
        }
    })
    })
}

function fetchMessage() {
    // Topic Receive
    client.on('message', (topic, payload) => {
        console.log('Received Message:', topic, payload.toString())
    })
}

</script>