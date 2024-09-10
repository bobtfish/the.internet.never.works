import { Text } from '@mantine/core'
import { AppleIcon, RemixIcon, TypeScriptIcon, MantineIcon, VSCodeIcon, LambdaIcon, CDKIcon, TerraformIcon } from '~/components'
import classes from './Footer.module.css'

export function Footer () {
  return (
    <Text color='dimmed' ta='center' size='sm' mx='auto' mt='xs'>
      Built with ❤️ on <AppleIcon className={classes.footerIcon} /> 
      with <VSCodeIcon className={classes.footerIcon} href="https://code.visualstudio.com/" />
      in <TypeScriptIcon className={classes.footerIcon} href="https://www.typescriptlang.org/" />
      using <RemixIcon className={classes.footerIcon} href="https://remix.run/" />
      and <MantineIcon size={18} className={classes.footerIcon} style={{marginRight: 0}} href="https://mantine.dev/" />.
      Deployed on <LambdaIcon className={classes.footerIcon} href="https://aws.amazon.com/pm/lambda/" />
      with <CDKIcon className={classes.footerIcon} href="https://aws.amazon.com/cdk/" />
      and <TerraformIcon size={20} className={classes.footerIcon} href="https://www.terraform.io/" />
      &nbsp;&nbsp;&nbsp;Content &copy; Tomas Doran 2024
    </Text>
  )
}
