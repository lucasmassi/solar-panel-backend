import Panel from '../models/Panel';
import User from '../models/User';

class PanelController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const user = await User.findByPk(req.userId);

    const panels = await Panel.findAll({
      where: { state: user.state },
      order: ['installation_date'],
      limit: 5,
      offset: (page - 1) * 5,
      attributes: [
        'id',
        'installation_date',
        'system_size',
        'zip_code',
        'state',
        'cost',
        'formatted_installation',
      ],
    });

    return res.json(panels);
  }
}

export default new PanelController();
