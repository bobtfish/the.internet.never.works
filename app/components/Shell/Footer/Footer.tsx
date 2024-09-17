import { Text, Box } from '@mantine/core'
import { AppleIcon, RemixIcon, TypeScriptIcon, MantineIcon, VSCodeIcon, LambdaIcon, CDKIcon, TerraformIcon } from '~/components'
import classes from './Footer.module.css'

export function Footer () {
  return (
    <Text color='dimmed' ta='center' size='sm' mx='auto' mt='xs'>
      Built with ❤️&nbsp;
      <Box component='span' className={classes.hideXSmall}>on <AppleIcon className={classes.footerIcon} /> 
      with <VSCodeIcon className={classes.footerIcon} href="https://code.visualstudio.com/" />
      in <TypeScriptIcon className={classes.footerIcon} href="https://www.typescriptlang.org/" />
      </Box>
      using <RemixIcon className={classes.footerIcon} href="https://remix.run/" />
      and <MantineIcon size={18} className={classes.footerIcon} style={{marginRight: 0}} href="https://mantine.dev/" />.
      Deployed on <LambdaIcon className={classes.footerIcon} href="https://aws.amazon.com/pm/lambda/" />
      with <Box component='span' className={classes.hideXSmall}><CDKIcon className={classes.footerIcon} href="https://aws.amazon.com/cdk/" />
      and</Box> <TerraformIcon size={20} className={classes.footerIcon} href="https://www.terraform.io/" />
      <Box component='span' className={classes.hideSmall}>
      &nbsp;&nbsp;&nbsp;&copy; Tomas Doran 2024
      </Box>
    </Text>
  )
}
