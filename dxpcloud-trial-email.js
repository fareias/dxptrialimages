/*==============================================
    TEMPLATE DATA
================================================*/

let mailTemplateData = {
  assets: {
    dxpCloudAvatar: './images/dxp-trial-mail/avatar@3x.png',
    imageHero: './images/dxp-trial-mail/image-hero@3x.png',
    signConsole: './images/dxp-trial-mail/sign-console@3x.png',
    signGithub: './images/dxp-trial-mail/sign-github@3x.png',
    signJenkins: './images/dxp-trial-mail/sign-jenkins@3x.png',
    signLiferay: './images/dxp-trial-mail/sign-liferay@3x.png',
    signUniversity: './images/dxp-trial-mail/sign-university@3x.png',
    thanksFooter: './images/dxp-trial-mail/thanks-footer@3x.png',
    thanksHeader: './images/dxp-trial-mail/thanks-header@3x.png',
  },
  ciCredentials: {
    user: 'customer',
    password: 'JNtCDZuTwHyFutJXsfq4FPa0gQpakL',
  },
  dxpCloudCredentials: {
    user: 'appledxp@liferay.com',
    password: '5acc7593b5ad',
  },
  linkUrls: {
    liferayDxp: '#',
    dxpCloudConsole: '#',
    sendGithubUsername: '#',
    dxpCloudCiDash: '#',
    lfrUniversity: '#',
    dxpCloudDocs: '#',
    supportReq: '#',
    supportUrl: '#',
    helpCenterUrl: '#',
    uptimeStatusUrl: '#',
  },
  mailto: '#',
  recipientName: 'Rachel',
  title: 'Your Liferay DXP Cloud Trial Starts Here 🚀',
  trialEndDate: 'Dec 29, 2018',
}


/*==============================================
    TEMPLATE
================================================*/

let template = `
  <table
  border="0"
  border-collapse="collapse"
  cellpadding="0"
  cellspacing="0"
  height="100%"
  style="font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol'; background-color:#F7F8F9; border-spacing: 0 !important;"
  width="100%">
    <thead style="background-color: transparent;">
      <tr>
        <td align="center" valign="center" style="padding: 0">
          <table style="background-color: #FFF; border-spacing: 0; box-shadow: 0 1px 0 0 #E7E7ED; margin-bottom: 1px;" width="684px" height="66px">
            <tr>
              <td style="display: flex; padding: 12px 0 12px 18px;" width="50%" align="left" valign="center">
                <a href="${mailTemplateData.linkUrls.dxpCloudConsole}" style="display: flex; text-decoration: none;">
                  <img src="${mailTemplateData.assets.dxpCloudAvatar}" style="height: 42px; width: 42px;" />
                  <span style="color: #6b6c7e; font-weight: 400; line-height: 30px; margin: 6px 0 6px 12px; font-size: 17px;">DXP Cloud</span>
                </a>
              </td>
              <td style="padding: 18px 18px 18px 0;" width="50%" align="right" valign="center">
                <span style="color: #6b6c7e; font-weight: 400; line-height: 30px; font-size: 13px; text-align: right;">Enterprise PaaS Tailored for <a href="${mailTemplateData.linkUrls.liferayDxp}" style="color: #0b5fff; text-decoration: none;">Liferay DXP</a></span>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </thead>
    <tbody>

      <tr>
        <td align="center" valign="center" style="padding: 0">
          <table style="background-color: #FFF; border-spacing: 0; padding: 66px 132px 24px;" width="684px">
            <tr>
              <td style="padding: 0 0 36px;">
                <span style="color: #272833; font-size: 45px; font-weight: 500; letter-spacing: 2px; line-height: 60px; opacity: 0.9;">Try the All-New DXP Cloud</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 0;">
                <span style="color: #393a4a; font-size: 15px; font-weight: 400; line-height: 27px;">
                  The newest way for enterprises to deploy and manage Liferay DXP. Launch your website with a secure, reliable PaaS solution that provides autoscaling, development tools, environments, monitoring and much more, all designed with years of in-house Liferay expertise.
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td align="center" valign="center" style="padding: 0">
          <table style="background: #FFF url('${mailTemplateData.assets.imageHero}'); background-size: cover; border-spacing: 0; padding: 0;" height="642px" width="684px"></table>
        </td>
      </tr>

      <tr>
        <td align="center" valign="center" style="padding: 0">
          <table style="background-color: #FFF; border-spacing: 0; padding: 54px 132px 90px;" width="684px">
            <tr>
              <td style="padding: 0 0 24px;">
                <span style="color: #272833; font-size: 21px; font-weight: 500; letter-spacing: 1px; line-height: 30px;">Hello ${mailTemplateData.recipientName},</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 0 54px;">
                <span style="color: #272833; font-size: 15px; font-weight: 400; line-height: 27px;">
                  The provisioning process is complete and everything is ready for you to start working on DXP Cloud Trial. Here are some important resources for you to get started.
                </span>
              </td>
            </tr>

            <tr>
              <td style="box-shadow: 0 -1px 0 0 #E7E7ED; display: flex; padding: 60px 0 54px;" width="420px">
                <img src="${mailTemplateData.assets.signConsole}" style="display: inline-flex; height: 96px; padding-right: 24px; width: 96px;" />
                <div style="display: inline-block; width: 300px;">
                  <span style="color: #272833; display: block; font-size: 17px; font-weight: 500; line-height: 30px; margin-bottom: 18px;">
                    Access the DXP Cloud Console
                  </span>
                  <div style="color: #30313f; display: block; font-size: 15px; font-weight: 400; line-height: 27px; width: 300px;">
                    <span>
                      You will have the access and management power over your project using our console.
                      <br/><br/>
                      <a href="${mailTemplateData.linkUrls.dxpCloudConsole}" style="color: #0b5fff; text-decoration: none;">Go to the DXP Cloud Console</a>
                      <br/><br/>
                      To log in, use the following credentials:
                      <br/><br/>
                      User: <span style="opacity: 0.68">${mailTemplateData.dxpCloudCredentials.user}</span>
                      <br/>
                      Password: <span style="opacity: 0.68">${mailTemplateData.dxpCloudCredentials.password}</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td style="box-shadow: 0 -1px 0 0 #E7E7ED; display: flex; padding: 60px 0 54px;" width="420px">
                <img src="${mailTemplateData.assets.signGithub}" style="display: inline-flex; height: 96px; padding-right: 24px; width: 96px;" />
                <div style="display: inline-block; width: 300px;">
                  <span style="color: #272833; display: block; font-size: 17px; font-weight: 500; line-height: 30px; margin-bottom: 18px;">
                    Get the Source Code
                  </span>
                  <div style="color: #30313f; display: block; font-size: 15px; font-weight: 400; line-height: 27px; width: 300px;">
                    <span>
                      For every new project, we create a GitHub repository only for you to use. Please, provide us with your Github username and we will invite you to collaborate on this project.
                      <br/><br/>
                      <a href="${mailTemplateData.linkUrls.sendGithubUsername}" style="color: #0b5fff; text-decoration: none;">Send your Github username</a>
                    </span>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td style="box-shadow: 0 -1px 0 0 #E7E7ED; display: flex; padding: 60px 0 54px;" width="420px">
                <img src="${mailTemplateData.assets.signJenkins}" style="display: inline-flex; height: 96px; padding-right: 24px; width: 96px;" />
                <div style="display: inline-block; width: 300px;">
                  <span style="color: #272833; display: block; font-size: 17px; font-weight: 500; line-height: 30px; margin-bottom: 18px;">
                    Know Your Continuous Integration
                  </span>
                  <div style="color: #30313f; display: block; font-size: 15px; font-weight: 400; line-height: 27px; width: 300px;">
                    <span>
                      DXP Cloud is configured to trigger an automatic test cycle in Jenkins every time a new commit or pull request is sent to your GitHub repository.
                      <br/><br/>
                      <a href="${mailTemplateData.linkUrls.dxpCloudCiDash}" style="color: #0b5fff; text-decoration: none;">Go to your DXP Cloud CI dashboard</a>
                      <br/><br/>
                      To log in, use the following credentials:
                      <br/><br/>
                      User: <span style="opacity: 0.68">${mailTemplateData.ciCredentials.user}</span>
                      <br/>
                      Password: <span style="opacity: 0.68">${mailTemplateData.ciCredentials.password}</span>
                    </span>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td style="box-shadow: 0 -1px 0 0 #E7E7ED; display: flex; padding: 60px 0 54px;" width="420px">
                <img src="${mailTemplateData.assets.signUniversity}" style="display: inline-flex; height: 96px; padding-right: 24px; width: 96px;" />
                <div style="display: inline-block; width: 300px;">
                  <span style="color: #272833; display: block; font-size: 17px; font-weight: 500; line-height: 30px; margin-bottom: 18px;">
                    Learn the Essentials
                  </span>
                  <div style="color: #30313f; display: block; font-size: 15px; font-weight: 400; line-height: 27px; width: 300px;">
                    <span>
                      DXP Cloud provides you an online course completely FREE. Discover how to deploy, monitor and evolve your applications on the cloud.
                      <br/><br/>
                      <a href="${mailTemplateData.linkUrls.lfrUniversity}" style="color: #0b5fff; text-decoration: none;">Watch video tutorials on Liferay University</a>
                    </span>
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td style="box-shadow: 0 -1px 0 0 #E7E7ED; display: flex; padding: 60px 0 0;" width="420px">
                <img src="${mailTemplateData.assets.signLiferay}" style="display: inline-flex; height: 96px; padding-right: 24px; width: 96px;" />
                <div style="display: inline-block; width: 300px;">
                  <span style="color: #272833; display: block; font-size: 17px; font-weight: 500; line-height: 30px; margin-bottom: 18px;">
                    Contact Our Support
                  </span>
                  <div style="color: #30313f; display: block; font-size: 15px; font-weight: 400; line-height: 27px; width: 300px;">
                    <span>
                      Find and learn everything about DXP Cloud in our helpful documentation.
                      <br/><br/>
                      <a href="${mailTemplateData.linkUrls.dxpCloudDocs}" style="color: #0b5fff; text-decoration: none;">Visit the DXP Cloud documentation</a>
                      <br/><br/>
                      If you have any other questions, you are more than welcome to open a support ticket.
                      <br/><br/>
                      <a href="${mailTemplateData.linkUrls.supportReq}" style="color: #0b5fff; text-decoration: none;">Submit a support request</a>
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <tr>
        <td align="center" valign="center" style="padding: 0">
          <table style="background-color: #0b5fff; border-spacing: 0; padding: 0;" width="684px">
            <tr>
              <td style="background: url('${mailTemplateData.assets.thanksHeader}'); background-size: cover; padding: 0;" height="156px" width="684px"></td>
            </tr>
            <tr>
              <td style="padding: 0 132px 36px;">
                <span style="color: #fff; font-size: 45px; font-weight: 500; letter-spacing: 2px; line-height: 60px;">Thank you!</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 132px 12px" height="246px">
                <span style="color: #fff; font-size: 15px; font-weight: 400; line-height: 27px;">
                  We're glad you signed up for this trial. You have 15 days FREE to start exploring DXP Cloud. In case you need to extend this period, please let us know.
                  <br/><br/>
                  Your trial will expire on ${mailTemplateData.trialEndDate}.
                  <br/><br/>
                  Cheers,
                  <br/><br/>
                  Liferay Cloud Team
                </span>
              </td>
            </tr>
            <tr>
              <td style="background: url('${mailTemplateData.assets.thanksFooter}'); background-size: cover; padding: 0;" height="132px" width="684px"></td>
            </tr>
          </table>
        </td>
      </tr>

      <tr style="background-color: transparent;">
        <td align="center" valign="center" style="padding: 0">
          <table style="background-color: #FFF; border-spacing: 0; padding: 72px 78px 84px;" width="684px">
            <tr>
              <td align="center" style="padding: 0">
                <span style="display: block; line-height: 18px; color: #6b6c7e; font-size: 12px; font-weight: 400; margin-bottom: 18px;">
                  This email was sent by <a href="${mailTemplateData.linkUrls.liferayDxp}" style="color: #0b5fff; text-decoration: none;">Liferay DXP Cloud</a>
                </span>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 0">
                <span style="display: block; line-height: 18px; color: #6b6c7e; font-size: 12px; font-weight: 400;">
                  Need help? <a href="mailto:${mailTemplateData.mailto}" style="color: #0b5fff; text-decoration: none;">Let our team do the work for you.</a>
                  <br/>
                  Liferay experts are available to answer your questions anytime.
                </span>
              </td>
            </tr>
            <tr>
              <td align="center" valign="center" height="42px" width="42px" style="padding: 24px 0;">
                <span style="display: inline-block; height: 42px; vertical-align: top; width: 42px;">
                  <img src="${mailTemplateData.assets.dxpCloudAvatar}" style="height: 42px; width: 42px;" />
                </span>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding: 0 0 30px;">
                <span style="display: block; line-height: 18px; color:#6b6c7e; font-size: 12px; font-weight: 400;">
                  Copyright © 2018 Liferay Cloud, Inc.
                </span>
                <span style="display: block; line-height: 18px; color:#6b6c7e; font-size: 12px; font-weight: 400;">
                  1400 Montefino Ave<br>
                  Diamond Bar, CA 91765
                </span>
              </td>
            </tr>
            <tr>
              <td align="center" style="color: #6b6c7e; padding: 0;">
                <a href="mailto:${mailTemplateData.mailto}" style="color: #0b5fff; font-size: 12px; font-weight: 400; line-height: 24px; text-decoration: none;">Contact Support</a> |
                <a href="${mailTemplateData.linkUrls.dxpCloudDocs}" style="color: #0b5fff; font-size: 12px; font-weight: 400; line-height: 24px; text-decoration: none;">Documentation</a> |
                <a href="${mailTemplateData.linkUrls.helpCenterUrl}" style="color: #0b5fff; font-size: 12px; font-weight: 400; line-height: 24px; text-decoration: none;">Help Center</a> |
                <a href="${mailTemplateData.linkUrls.lfrUniversity}" style="color: #0b5fff; font-size: 12px; font-weight: 400; line-height: 24px; text-decoration: none;">Tutorials</a> |
                <a href="${mailTemplateData.linkUrls.uptimeStatusUrl}" style="color: #0b5fff; font-size: 12px; font-weight: 400; line-height: 24px; text-decoration: none;">Uptime Status</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

    </tbody>
  </table>
`;

// Write to test document
document.write(template);