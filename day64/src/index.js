import RelayLocalSchema from 'relay-local-schema'

import schema from './schema'

Relay.injectNetworkLayer(
  new RelayLocalSchema.NetworkLayer({ schema })
)

