const connection = require('../database/connections');
const crypto = require('crypto');

module.exports = {
    /**Para recuperação dos dados */
    async index(request, response) {
        const funcionarios = await connection('funcionarios')
        .join('telefone', 'telefone.tel_id', '=', 'funcionarios.id')
        .join('email', 'email.email_id', '=', 'funcionarios.id')
        .select(['funcionarios.*',
        'telefone.telefone',
        'email.email']);

        return response.json(funcionarios);
    },

    /**Para inserção dos dados */
    async create(request, response) {
        const { name, lastname, telefone, email } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
        const tel_id = id;
        const email_id = id;

        await connection('funcionarios').insert({
            id,
            name,
            lastname,
        });

        await connection('telefone').insert({
            tel_id,
            telefone
        });

        await connection('email').insert({
            email_id,
            email
        })

        return response.json({id})
    },

    /**Para editar */
    async update(request, response){
        const id = request.headers.authorization;

        const { name, lastname } = request.body;

        if(name){
            await connection('funcionarios')
            .where('id', id)
            .update({
                name: name
            });
        };

        if(lastname){
            await connection('funcionarios')
            .where('id', id)
            .update({
                lastname: lastname
            });
        };

        return response.status(200).send();
    },

    /**Para deletar os dados */
    async delete(request, response) {
        
        const func_id = request.headers.authorization;
    
        const funcionarios = await connection('funcionarios')
        .select('id')
        .where('id', func_id)
        .first();
        
        if(funcionarios.id != func_id){
            return response.status(401).json({ error: 'Operation not permitted.'})
        }

        await connection('telefone').where('tel_id', func_id).delete();
        await connection('email').where('email_id', func_id).delete();
        await connection('funcionarios').where('id', func_id).delete();

        return response.status(200).send();
    },

    /**Para adicionar telefones ou email a um funcionario */
    async create_telefone_email(request, response){
        const id  = request.headers.authorization;

        const tel_id = id; 
        const email_id = id;

        const { telefone, email } = request.body;

        if(telefone){
            await connection('telefone').insert({
                tel_id,
                telefone
            });
        }
        
        if(email){
            await connection('email').insert({
                email_id,
                email
            });
        }
        
        return response.status(200).send();
    },
};