/* Generated by Opal 1.0.3 */
(function(Opal) {
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $$$ = Opal.const_get_qualified, $$ = Opal.const_get_relative, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $truthy = Opal.truthy;

  Opal.add_stubs(['$setPrefixes', '$==', '$getCheckResult', '$>', '$getFailResult', '$getSuccessResult', '$%', '$===', '$to_i', '$last_match', '$getCheckShockResult', '$getStrikeLocationHuman', '$roll', '$<=', '$getStrikeLocationHumanUpperTable', '$getStrikeLocationHumanDownTable', '$getStrikeLocationHumanNormalTable', '$raise', '$get_table_by_number', '$getLocationSide', '$getFaceLocation', '$debug', '$odd?', '$sub']);
  return (function($base, $super, $parent_nesting) {
    var self = $klass($base, $super, 'HarnMaster');

    var $nesting = [self].concat($parent_nesting), $HarnMaster_check_1D100$1, $HarnMaster_getCheckResult$2, $HarnMaster_getFailResult$3, $HarnMaster_getSuccessResult$4, $HarnMaster_rollDiceCommand$5, $HarnMaster_getCheckShockResult$6, $HarnMaster_getStrikeLocationHuman$7, $HarnMaster_getLocationSide$8, $HarnMaster_getFaceLocation$9, $HarnMaster_getStrikeLocationHumanUpperTable$10, $HarnMaster_getStrikeLocationHumanNormalTable$11, $HarnMaster_getStrikeLocationHumanDownTable$12;

    
    Opal.const_set($nesting[0], 'ID', "HarnMaster");
    Opal.const_set($nesting[0], 'NAME', "ハーンマスター");
    Opal.const_set($nesting[0], 'SORT_KEY', "はあんますたあ");
    Opal.const_set($nesting[0], 'HELP_MESSAGE', "" + "・判定\n" + "　1D100<=XX の判定時に致命的失敗・決定的成功を判定\n" + "・ショック判定（SHKx）\n" + "　例）SHK13,3\n" + "・人型用　中段命中部位表 (SLH)／上段命中部位 (SLHU)／上段命中部位 (SLHD)\n");
    self.$setPrefixes(["SHK\\d+.*", "SLH", "SLHU", "SLHD"]);
    
    Opal.def(self, '$check_1D100', $HarnMaster_check_1D100$1 = function $$check_1D100(total, _dice_total, cmp_op, target) {
      var self = this, result = nil;

      
      if (target['$==']("?")) {
        return ""};
      if (cmp_op['$==']("<=")) {
      } else {
        return ""
      };
      result = self.$getCheckResult(total, target);
      return "" + "＞ " + (result);
    }, $HarnMaster_check_1D100$1.$$arity = 4);
    
    Opal.def(self, '$getCheckResult', $HarnMaster_getCheckResult$2 = function $$getCheckResult(total, diff) {
      var self = this;

      
      if ($truthy($rb_gt(total, diff))) {
        return self.$getFailResult(total)};
      return self.$getSuccessResult(total);
    }, $HarnMaster_getCheckResult$2.$$arity = 2);
    
    Opal.def(self, '$getFailResult', $HarnMaster_getFailResult$3 = function $$getFailResult(total) {
      var self = this;

      
      if (total['$%'](5)['$=='](0)) {
        return "致命的失敗"};
      return "失敗";
    }, $HarnMaster_getFailResult$3.$$arity = 1);
    
    Opal.def(self, '$getSuccessResult', $HarnMaster_getSuccessResult$4 = function $$getSuccessResult(total) {
      var self = this;

      
      if (total['$%'](5)['$=='](0)) {
        return "決定的成功"};
      return "成功";
    }, $HarnMaster_getSuccessResult$4.$$arity = 1);
    
    Opal.def(self, '$rollDiceCommand', $HarnMaster_rollDiceCommand$5 = function $$rollDiceCommand(command) {
      var self = this, result = nil, $case = nil, toughness = nil, damage = nil, type = nil;

      
      result = nil;
      $case = command;
      if (/^SHK(\d*),(\d+)/i['$===']($case)) {
      toughness = $$($nesting, 'Regexp').$last_match(1).$to_i();
      damage = $$($nesting, 'Regexp').$last_match(2).$to_i();
      result = self.$getCheckShockResult(damage, toughness);}
      else if (/SLH(U|D)?/i['$===']($case)) {
      type = $$($nesting, 'Regexp').$last_match(1);
      result = self.$getStrikeLocationHuman(type);}
      else {result = nil};
      return result;
    }, $HarnMaster_rollDiceCommand$5.$$arity = 1);
    
    Opal.def(self, '$getCheckShockResult', $HarnMaster_getCheckShockResult$6 = function $$getCheckShockResult(damage, toughness) {
      var $a, $b, self = this, dice = nil, diceText = nil, result = nil, text = nil;

      
      $b = self.$roll(damage, 6), $a = Opal.to_ary($b), (dice = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
      result = (function() {if ($truthy($rb_le(dice, toughness))) {
        return "成功"
      } else {
        return "失敗"
      }; return nil; })();
      text = "" + "ショック判定(ダメージ:" + (damage) + ", 耐久力:" + (toughness) + ") ＞ (" + (dice) + "[" + (diceText) + "]) ＞ " + (result);
      return text;
    }, $HarnMaster_getCheckShockResult$6.$$arity = 2);
    
    Opal.def(self, '$getStrikeLocationHuman', $HarnMaster_getStrikeLocationHuman$7 = function $$getStrikeLocationHuman(type) {
      var $a, $b, self = this, typeName = nil, table = nil, $case = nil, number = nil, part = nil, result = nil;

      
      typeName = "";
      table = nil;
      $case = type;
      if ("U"['$===']($case)) {
      typeName = "命中部位(人型 上段)";
      table = self.$getStrikeLocationHumanUpperTable();}
      else if ("D"['$===']($case)) {
      typeName = "命中部位(人型 下段)";
      table = self.$getStrikeLocationHumanDownTable();}
      else if (nil['$===']($case)) {
      typeName = "命中部位(人型 中段)";
      table = self.$getStrikeLocationHumanNormalTable();}
      else {self.$raise("" + "unknow atak type " + (type))};
      $b = self.$roll(1, 100), $a = Opal.to_ary($b), (number = ($a[0] == null ? nil : $a[0])), $b;
      part = self.$get_table_by_number(number, table);
      part = self.$getLocationSide(part, number);
      part = self.$getFaceLocation(part);
      result = "" + (typeName) + " ＞ (" + (number) + ")" + (part);
      return result;
    }, $HarnMaster_getStrikeLocationHuman$7.$$arity = 1);
    
    Opal.def(self, '$getLocationSide', $HarnMaster_getLocationSide$8 = function $$getLocationSide(part, number) {
      var self = this, side = nil;

      
      if ($truthy(/^\*/['$==='](part))) {
      } else {
        
        self.$debug("part has NO side", part);
        return part;
      };
      self.$debug("part has side", part);
      side = (function() {if ($truthy(number['$odd?']())) {
        return "左"
      } else {
        return "右"
      }; return nil; })();
      return part.$sub(/\*/, side);
    }, $HarnMaster_getLocationSide$8.$$arity = 2);
    
    Opal.def(self, '$getFaceLocation', $HarnMaster_getFaceLocation$9 = function $$getFaceLocation(part) {
      var $a, $b, self = this, table = nil, number = nil, faceLocation = nil, result = nil;

      
      self.$debug("getFaceLocation part", part);
      if ($truthy(/\+$/['$==='](part))) {
      } else {
        
        self.$debug("is NOT Face");
        return part;
      };
      self.$debug("is Face");
      table = [[15, "顎"], [30, "*目"], [64, "*頬"], [80, "鼻"], [90, "*耳"], [100, "口"]];
      $b = self.$roll(1, 100), $a = Opal.to_ary($b), (number = ($a[0] == null ? nil : $a[0])), $b;
      faceLocation = self.$get_table_by_number(number, table);
      self.$debug("faceLocation", faceLocation);
      self.$debug("number", number);
      faceLocation = self.$getLocationSide(faceLocation, number);
      result = part.$sub(/\+$/, "" + " ＞ (" + (number) + ")" + (faceLocation));
      return result;
    }, $HarnMaster_getFaceLocation$9.$$arity = 1);
    
    Opal.def(self, '$getStrikeLocationHumanUpperTable', $HarnMaster_getStrikeLocationHumanUpperTable$10 = function $$getStrikeLocationHumanUpperTable() {
      var self = this, table = nil;

      
      table = [[15, "頭部"], [30, "顔+"], [45, "首"], [57, "*肩"], [69, "*上腕"], [73, "*肘"], [81, "*前腕"], [85, "*手"], [95, "胸部"], [100, "腹部"]];
      return table;
    }, $HarnMaster_getStrikeLocationHumanUpperTable$10.$$arity = 0);
    
    Opal.def(self, '$getStrikeLocationHumanNormalTable', $HarnMaster_getStrikeLocationHumanNormalTable$11 = function $$getStrikeLocationHumanNormalTable() {
      var self = this, table = nil;

      
      table = [[5, "頭部"], [10, "顔+"], [15, "首"], [27, "*肩"], [33, "*上腕"], [35, "*肘"], [39, "*前腕"], [43, "*手"], [60, "胸部"], [70, "腹部"], [74, "股間"], [80, "*臀部"], [88, "*腿"], [90, "*膝"], [96, "*脛"], [100, "*足"]];
      return table;
    }, $HarnMaster_getStrikeLocationHumanNormalTable$11.$$arity = 0);
    return (Opal.def(self, '$getStrikeLocationHumanDownTable', $HarnMaster_getStrikeLocationHumanDownTable$12 = function $$getStrikeLocationHumanDownTable() {
      var self = this, table = nil;

      
      table = [[6, "*前腕"], [12, "*手"], [19, "胸部"], [29, "腹部"], [35, "股間"], [49, "*臀部"], [70, "*腿"], [78, "*膝"], [92, "*脛"], [100, "*足"]];
      return table;
    }, $HarnMaster_getStrikeLocationHumanDownTable$12.$$arity = 0), nil) && 'getStrikeLocationHumanDownTable';
  })($nesting[0], $$($nesting, 'DiceBot'), $nesting)
})(Opal);
