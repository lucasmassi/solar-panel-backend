import Panel from '../models/Panel';
import User from '../models/User';

class PanelController {
  async index(req, res) {
    const user = await User.findByPk(req.userId);

    const panels = await Panel.findAll({
      where: { state: user.state },
      order: ['installation_date'],
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
