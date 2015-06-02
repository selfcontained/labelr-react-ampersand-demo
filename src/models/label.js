import xhr from 'xhr';
import Model from 'ampersand-model';
import app from 'ampersand-app';
import githubMixin from '../helpers/github-mixin';

export default Model.extend(githubMixin, {
    idAttribute: 'name',

    props: {
        name: 'string',
        color: 'string'
    },

    session: {
        'editing': {
            type: 'boolean',
            default: false
        },
        saved: {
            type: 'boolean',
            default: true
        }
    },

    update (newAttributes) {
        const old = this.attributes;

        xhr({
            url: this.url(),
            method: 'PATCH',
            json: newAttributes,
            headers: {
                Authorization: 'token ' + app.me.token
            },
        }, (err, resp, body) => {
            if(err || (resp && resp.statusCode !== 200)) {
                this.set(old);
                console.error('check yo wifi');
            }
        });

        this.set(newAttributes);
    },

    isNew () {
        return !this.saved;
    }
});
