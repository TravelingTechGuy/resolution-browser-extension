import React from 'react'
import styles from '../../styles/install.style'
import {withStyles, WithStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import {
  StorageSyncKey,
  chromeStorageSyncGet,
  chromeStorageSyncSet,
} from '../../util/chromeStorageSync'
import {ExtensionOptions} from '../../types'

interface Props extends WithStyles<typeof styles> {}

const Install: React.FC<Props> = ({classes}) => {
  chromeStorageSyncGet(StorageSyncKey.GatewayBaseURL).then(url => {
    if (!url)
      chromeStorageSyncSet(
        StorageSyncKey.GatewayBaseURL,
        ExtensionOptions.Pinata,
      )
  })

  return (
    <div className={classes.background}>
      <div className={classes.heading}>
        <Typography variant="h4">
          Decentralized browser extension was installed
        </Typography>
      </div>
      <div className={classes.howto}>
        <Typography variant="h3">How to use</Typography>
        <ol style={{fontSize: '1.15rem', marginLeft: '0'}}>
          <li style={{marginTop: '.5em'}}>
            Enter a domain into the search bar. ex. http://57smiles.crypto
          </li>
          <li style={{marginTop: '.5em'}}>
            The browser will redirect you using the gateway url below.
          </li>
          <li style={{marginTop: '.5em'}}>
            For a list of current gateways check out this{' '}
            <a
              className={classes.link}
              href="https://ipfs.github.io/public-gateway-checker/"
            >
              website
            </a>
            .
          </li>
          <li style={{marginTop: '.5em'}}>
            You can change the gateway in the main pop up windows of this
            extension
          </li>
        </ol>
      </div>
    </div>
  )
}

export default withStyles(styles)(Install)
