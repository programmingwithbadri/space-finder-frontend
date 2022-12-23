const spacesUrl = process.env.spacesUrl;
export const config = {
    REGION: process.env.REGION,
    USER_POOL_ID: process.env.USER_POOL,
    APP_CLIENT_ID: process.env.APP_CLIENT,
    IDENTITY_POOL_ID: process.env.IDENTITY_POOL,
    SPACES_PHOTOS_BUCKET: process.env.SPACES_PHOTOS_BUCKET,
    api: {
        baseUrl: spacesUrl,
        spacesUrl: `${spacesUrl}spaces`,
    },
};
