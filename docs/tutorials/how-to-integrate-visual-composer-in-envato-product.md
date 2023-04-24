# How to Integrate Visual Composer in ThemeForest Theme at Envato

You can bundle Visual Composer plugin with your ThemeForest Theme at Envato, by purchasing the [Theme Integration License](https://visualcomposer.com/theme-integration/). 

After that you will receive a specific licence that will allow you to activate Visual Composer premium version for a single site for you as a developer, and additionally to that depending on the license type a specific count of your Theme customers will be able to activate Visual Composer premium by using the Envato items purchase code. 

### Implementation

1. After purchase go to the [Theme Integration](https://my.visualcomposer.com/theme-integration/) section in [my.visualcomposer.com](https://my.visualcomposer.com/)

<img src="/img/docs/theme-integration-section.png" alt="Theme Integration" />

2. Before getting access to the license you will need to create an [Envato API token](https://build.envato.com/create-token/). 

<img width="50%" src="/img/docs/theme-integration-api-key-create.png" alt="Theme Integration API key create" /> 

3. Make sure that you select **Verify purchases of the user's items** permission for the token.

<img width="50%" src="/img/docs/theme-integration-api-key-create-2.png" alt="Theme Integration API key create" />

4. When the token is created copy it and paste it in [My Visual Composer Theme Integration section](https://my.visualcomposer.com/theme-integration/), by clicking on the button - **Validate Envato API Key**

<img width="50%" src="/img/docs/theme-integration-api-key-validate.png" alt="Theme Integration API key validate" /> 

### There you will see the license that consists of:

1. **Visual Composer License** is the personal license key for you as a developer to use our premium version, don't distribute this key to anyone.
2. **API Token** this is your public token that needs to be defined inside your Theme function.php like
```php
define('VCV_AUTHOR_API_KEY','vcwb-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
```
3. **Status** Shows if the personal license key is activated or not.
4. **Expiration Date** license expiration date, if the license expires you and your ThemeForest customers won't be able to download any new elements or templates from the cloud. 
5. **Author Activations** your personal licence activation limits, usually max activation count is 1 as this license shouldn't be distributed. 
6. **User Activations** your ThemeForest customer activations, here you can follow how many users that have purchased your Theme at Envato have activated Visual Composer.
7. **Sites** here you can see all the sites that have activated Visual Composer with your Envato purchase key, also if needed, you can deactivate it for a specific site.
8. **Upgrades** if you see that soon you will reach the **User Activations** limit, this is the place where to look into to increase it. 


**Important:** You don't need to share your Visual Composer Theme Integration license with your customers. They will use their Envato purchase key to activate Visual Composer.